import React from "react";
import SideBarChannel from "../../component/sidebar-channel/sidebar-channel";
import SidebarFriendList from "../../component/sidebar-friendlist/sidebar-friendlist";
import "./Channels-me.scss";
function ChannelsMe() {
  return (
    <div className="container">
      <SideBarChannel />
      <SidebarFriendList />
    </div>
  );
}

export default ChannelsMe;
