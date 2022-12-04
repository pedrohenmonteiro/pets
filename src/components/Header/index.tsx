import { Link, Router } from "react-router-dom";
import { GiHollowCat } from "react-icons/gi";
import Button from "../Button";

const Header = () => {
  return (
    <header className="shadow fixed z-10 top-0 bg-white w-full">
      <div className=" container flex justify-between items-center ">
        <div className="">
          <Link to="/">
            <GiHollowCat size={64} />
          </Link>
        </div>

        <nav className="flex gap-6 items-center">
          <Link to="/login">Entrar</Link>
          <Link to="/login/criar">
            <Button size="large">Cadastre-se</Button>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
