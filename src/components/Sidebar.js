import React from "react";
import { SidebarData } from "./SidebarData";
import SidebarIcon from "./SidebarIcon";
import { v4 as uuidv4 } from "uuid";

function Sidebar() {
  return (
    <div className="Sidebar">
      <SidebarIcon />
      <ul className="SidebarList">
        {SidebarData.map((value, key) => {
          return (
            <li
              key={uuidv4()}
              id={window.location.pathname == value.link ? "active" : ""}
              className="row"
              onClick={() => {
                window.location.pathname = value.link;
              }}
            >
              <div id="icon">{value.icon}</div>
              <div id="title">{value.title}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Sidebar;
