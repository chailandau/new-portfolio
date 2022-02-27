import { Link } from "react-scroll";

const Menu = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link
              to="tools"
              smooth={true}
              offset={50}
              duration={750}
              hashSpy={true}
            >
              Tools
            </Link>
          </li>
          <li><a href="">Work</a></li>
          <li><a href="">About</a></li>
          <li><a href="">Contact</a></li>
        </ul>
      </nav>
    </>
  );
};

export default Menu;
