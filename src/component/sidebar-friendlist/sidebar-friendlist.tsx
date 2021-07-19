import React from "react";
import ProfileBox from "../profile-box/profile-box";
import SidebarFriendListItem from "../sidebar-friendlist-item/sidebar-friendlist-item";
import "./sidebar-friendlist.scss";

function SidebarFriendList() {
  return (
    <div className="sidebar-friendlist ">
      <div className="sidebar-friendlist__header">
        <button className="w-full sidebar-friendlist__input">
          Find or start a converstation
        </button>
      </div>
      <div className="p-2 sidebar-friendlist__body">
        <div className="flex flex-row items-center justify-between">
          <span className="sidebar-friendlist__body__header_text">
            DIRECT MESSAGES
          </span>
          <i
            className=" fas fa-plus"
            style={{ fontSize: "0.75rem", color: "#8e9297" }}
          ></i>
        </div>
        <div className="mt-5 sidebar-box">
          <SidebarFriendListItem />
          <SidebarFriendListItem />
          <SidebarFriendListItem />
          <SidebarFriendListItem />
          <SidebarFriendListItem />
          <SidebarFriendListItem />
          <SidebarFriendListItem />
          <SidebarFriendListItem />
          <SidebarFriendListItem />
          <SidebarFriendListItem />
          <SidebarFriendListItem />
          <SidebarFriendListItem />
          <SidebarFriendListItem />
          <SidebarFriendListItem />
          <SidebarFriendListItem />
          <SidebarFriendListItem />
          <SidebarFriendListItem />
          <SidebarFriendListItem />
          <SidebarFriendListItem />
          <SidebarFriendListItem />
          <SidebarFriendListItem />
          <SidebarFriendListItem />
          <SidebarFriendListItem />
        </div>
        <ProfileBox />
      </div>
    </div>
  );
}

export default SidebarFriendList;
