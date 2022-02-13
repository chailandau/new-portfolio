import Tool from "./Tool";

// icons
import Html from "./svg/Icons/Html";
import Css from "./svg/Icons/Css";
import Js from "./svg/Icons/Js";
import React from "./svg/Icons/React";
import Next from "./svg/Icons/Next";
import Git from "./svg/Icons/Git";
import Wordpress from "./svg/Icons/Wordpress";
import Acf from "./svg/Icons/Acf";
import Firebase from "./svg/Icons/Firebase";
import VsCode from "./svg/Icons/VsCode";
import Adobe from "./svg/Icons/Adobe";
import Figma from "./svg/Icons/Figma";
import Sketch from "./svg/Icons/Sketch";
import Sass from "./svg/Icons/Sass";
import A11y from "./svg/Icons/A11y";

const Tools = () => {
  return (
    <div id="tools" className="section">
      <div className="wrapper">
        <h2 className="lg-title">Some of the tools I use</h2>
        <div className="grid">
          <Tool 
            icon={<Html />}
            name="HTML"
          />
          <Tool 
            icon={<Css />}
            name="CSS"
          />
          <Tool 
            icon={<Js />}
            name="JS"
          />
          <Tool 
            icon={<React />}
            name="React"
          />
          <Tool 
            icon={<Next />}
            name="Next.js"
          />
          <Tool 
            icon={<Git />}
            name="Git"
          />
          <Tool 
            icon={<Wordpress />}
            name="WordPress"
          />
          <Tool 
            icon={<Acf />}
            name="ACF"
          />
          <Tool 
            icon={<Firebase />}
            name="Firebase"
          />
          <Tool 
            icon={<VsCode />}
            name="VS Code"
          />
          <Tool 
            icon={<Adobe />}
            name="Adobe CC"
          />
          <Tool 
            icon={<Figma />}
            name="Figma"
          />
          <Tool 
            icon={<Sketch />}
            name="Sketch"
          />
          <Tool 
            icon={<Sass />}
            name="Sass"
          />
          <Tool 
            icon={<A11y />}
            name="A11y"
          />
        </div>
      </div>
    </div>
  );
};

export default Tools;
