import React from "react";
import SideBarChannels from "../../component/sidebar-channels/sidebar-channels";
import SideBarChannel from "../../component/sidebar-group/sidebar-channel";

function Channels() {
  return (
    <div className="container">
      <SideBarChannel />
      <SideBarChannels />
    </div>
  );
}

export default Channels;
