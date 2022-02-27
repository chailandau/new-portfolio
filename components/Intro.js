import FeaturedImage from "./FeaturedImage";
import Arrow from "./svg/Arrow";
import { Link } from "react-scroll";

const Intro = () => {
  return (
    <div className="intro section">
      <div className="wrapper wide">
        <p className="xl-title">
          <span>Hello, I’m Chai. I’m a </span>
          <span className="bold gradient">front-end web developer </span> 
          <span>with a background in </span>
          <span className="italic gradient">graphic and web design. </span>
        </p>
        <FeaturedImage />
      </div>
      <Link
        to="tools"
        smooth={true}
        offset={50}
        duration={750}
        hashSpy={true}
      >
        <Arrow />
      </Link>
    </div>
  );
};

export default Intro;
