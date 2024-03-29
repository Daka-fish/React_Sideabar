import React from "react";
import Icon from "../images/Kyudo_back.png";

function SidebarIcon() {
  return (
    <div className="SidebarIcon">
      <img src={Icon} />
      <p>
        <a href="https://twitter.com/chrono_f1sh">X(Twitter)</a>
      </p>
    </div>
  );
}

export default SidebarIcon;
