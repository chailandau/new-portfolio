import FeaturedImage from "./FeaturedImage";
import Arrow from "./svg/Arrow";

const Intro = () => {
  return (
    <div className="intro">
      <div className="wrapper wide">
        <p className="xl-title">
          <span>Hello, I’m Chai. I’m a </span>
          <span className="bold gradient">front-end web developer </span> 
          <span>with a background in </span>
          <span className="italic gradient">graphic and web design. </span>
        </p>
        <FeaturedImage />
      </div>
      <Arrow />
    </div>
  );
};

export default Intro;
