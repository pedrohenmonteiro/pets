import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { TOKEN_POST, TOKEN_VALIDATE_POST, USER_GET } from "../services/api";

export const AuthContext = createContext({
  userLogin: (value: SignInProps) => {
    return;
  },
  userLogout: () => {
    return;
  },
  data: {
    email: "",
    id: 0,
    nome: "",
    username: "",
  },
  error: "",
  loading: false,
  login: false,
});

type AuthContextProps = {
  children: React.ReactNode;
};

export type SignInProps = {
  username: string;
  password: string;
};

export const AuthStorage = ({ children }: AuthContextProps) => {
  const [data, setData] = useState({
    email: "",
    id: 0,
    nome: "",
    username: "",
  });
  const [login, setLogin] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const autoLogin = async () => {
      const token = window.localStorage.getItem("token");
      if (token) {
        try {
          setError("");
          setLoading(true);
          const { url, options } = TOKEN_VALIDATE_POST(token);
          const response = await fetch(url, options);
          if (!response.ok) throw new Error("Token inválido!");
          await getUser(token);
        } catch (err) {
          userLogout();
        } finally {
          setLoading(false);
        }
      }
    };
    autoLogin();
  }, []);

  const getUser = async (token: string) => {
    const { url, options } = USER_GET(token);
    const response = await fetch(url, options);
    const data = await response.json();
    setData(data);
    setLogin(true);
  };

  const userLogin = async (value: SignInProps) => {
    try {
      setError("");
      setLoading(true);
      const { url, options } = TOKEN_POST(value);
      const response = await fetch(url, options);
      if (!response.ok) throw new Error(`Error: ${response.statusText}`);
      const { token } = await response.json();
      window.localStorage.setItem("token", token);
      await getUser(token);
      navigate("/conta");
    } catch (err) {
      setError("An error ocurred, try again later");
      setLogin(false);
    } finally {
      setLoading(false);
    }
  };

  const userLogout = async () => {
    setData({ email: "", id: 0, nome: "", username: "" });
    setError("");
    setLogin(false);
    setLoading(false);
    window.localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <AuthContext.Provider
      value={{ userLogin, data, userLogout, error, loading, login }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
