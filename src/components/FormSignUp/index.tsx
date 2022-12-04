import TextField from "../TextField";
import { BiUser } from "react-icons/bi";
import { FiLock, FiMail } from "react-icons/fi";
import Button from "../Button";
import { Link } from "react-router-dom";

const FormSignUp = () => (
  <form>
    <div className="flex flex-col gap-2 mb-8">
      <TextField name="username" icon={<BiUser />} placeholder="Username" />
      <TextField
        name="email"
        type="email"
        icon={<FiMail />}
        placeholder="Email"
      />
      <TextField
        name="password"
        type="password"
        icon={<FiLock />}
        placeholder="Password"
      />
    </div>

    <Button size="large">Sign up</Button>

    <p className="text-center my-4 text-sm">
      Already have an account?{" "}
      <Link to="/" className="font-bold underline text-pink-500">
        Sign in
      </Link>
    </p>
  </form>
);

export default FormSignUp;
