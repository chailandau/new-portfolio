import Logo from "../svg/Logo";
import Menu from "./Menu";

const Header = () => {
  return (
    <header>
      <div className="wrapper wide">
        <Logo />
        <Menu />
      </div>
    </header>
  );
};
  
export default Header;
  
