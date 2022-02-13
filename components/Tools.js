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

const Tools = () => {
  return (
    <div className="tools">
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
            name="Next"
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
            name="VSCode"
          />
          <Tool 
            icon={<Adobe />}
            name="Adobe CC"
          />
        </div>
      </div>
    </div>
  );
};

export default Tools;
