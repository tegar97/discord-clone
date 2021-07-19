import React from "react";
import DasboardFriend from "../../component/dasboard-friend/dasboard-friend";
import SideBarChannel from "../../component/sidebar-group/sidebar-channel";
import SidebarFriendList from "../../component/sidebar-friendlist/sidebar-friendlist";
import "./Channels-me.scss";

function ChannelsMe() {
  return (
    <div className="container">
      <SideBarChannel />
      <SidebarFriendList />
      <DasboardFriend />
    </div>
  );
}

export default ChannelsMe;
