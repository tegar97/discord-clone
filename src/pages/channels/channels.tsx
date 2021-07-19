import React from "react";
import ChatGroupBar from "../../component/chat-group-bar/chat-group-bar";
import SideBarChannels from "../../component/sidebar-channels/sidebar-channels";
import SideBarChannel from "../../component/sidebar-group/sidebar-channel";

function Channels() {
  return (
    <div className="container">
      <SideBarChannel />
      <SideBarChannels />
      <ChatGroupBar />
    </div>
  );
}

export default Channels;
