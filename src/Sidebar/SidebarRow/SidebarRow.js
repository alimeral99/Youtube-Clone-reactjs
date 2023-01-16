import React from "react";
import "./SidebarRow.css";

function SidebarRow({ title, Icon }) {
  return (
    <div className="sidebarRow">
      {Icon && <Icon className="sidebarRow__Icon" />}
      <h2 className="sidebarRow__Title">{title}</h2>
    </div>
  );
}

export default SidebarRow;
