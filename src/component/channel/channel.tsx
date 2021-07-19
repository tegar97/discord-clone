import React from "react";
function Channel() {
  return (
    <div>
      <div className="flex flex-row items-center justify-between cursor-pointer ">
        <span className="channel-category hover:text-white">Text Channels</span>
        <i
          className="fas fa-plus hover:text-white"
          style={{ color: "#8e9297" }}
        ></i>
      </div>
      <ul>
        <li>
          <span>tess</span>
        </li>
      </ul>
    </div>
  );
}

export default Channel;
