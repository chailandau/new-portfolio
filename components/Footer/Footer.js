import Menu from "../Header/Menu";
import Logo from "../svg/Logo";

let Scroll = require( "react-scroll" );
let scroll = Scroll.animateScroll;

let scrollTop = () => {
  // include this so it works with ssr
  if ( typeof window !== "undefined" ) {
    scroll.scrollToTop( { duration: 750 } );
  }
};

const Footer = () => {
  // dynamically get current year
  const currentYear = () => {
    let today = new Date();
    let yyyy = today.getFullYear();
    return yyyy;
  };
  return (
    <footer>
      <div className="wrapper wide">
        <div className="left">
          <a onClick={scrollTop}>
            <Logo />
          </a>
          <span>Copyright © Chai Landau {currentYear()}</span> 
        </div>
        <div className="right">
          <Menu />
        </div>
       
      </div>
    </footer>
  );
};

export default Footer;
