import React from "react";
import ChannelGroup from "../channel-group/ChannelGroup";
import Channel from "../channel/channel";
import ProfileBox from "../profile-box/profile-box";
import "./sidebar-channels.scss";
function SideBarChannels() {
  return (
    <div className="relative sidebar-channels">
      <div className="sidebar-channels-header ">
        <span className="font-bold text-white">tegar akmal's server</span>
      </div>
      <div className="mt-5  sidebar-channels-body">
        <ChannelGroup />
        <Channel />
        <ProfileBox />
      </div>
    </div>
  );
}

export default SideBarChannels;
