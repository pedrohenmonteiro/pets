import { Link, Router } from "react-router-dom";
import { GiHollowCat } from "react-icons/gi";
import Button from "../Button";
import { useContext } from "react";
import AuthContext from "../../contexts/AuthContext";
import { BiUserCircle } from "react-icons/bi";

type HeaderProps = {
  username?: string;
};

const Header = ({ username }: HeaderProps) => {
  const { data } = useContext(AuthContext);

  return (
    <header className="shadow  bg-white w-full">
      <div className=" container flex justify-between items-center ">
        <div className="">
          <Link to="/">
            <GiHollowCat size={64} />
          </Link>
        </div>
        <nav className="">
          {data.nome ? (
            <div className="flex gap-1 items-center">
              <BiUserCircle size={24} />
              <Link to="/conta">{data.nome}</Link>
            </div>
          ) : (
            <div className="flex gap-4 items-center">
              <Link to="/login">Entrar</Link>
              <Link to="/login/criar">
                <Button size="large">Cadastre-se</Button>
              </Link>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
