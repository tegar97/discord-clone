import React from "react";
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
        <div
          className="absolute bottom-0 left-0 flex flex-row w-full p-2 "
          style={{ backgroundColor: "#292b2f" }}
        >
          <div>
            <img
              src="https://discord.com/assets/6f26ddd1bf59740c536d2274bb834a05.png"
              alt="discord "
              className="myProfile"
            />
          </div>
          <div className="flex flex-col ml-2">
            <span className="profileName">tegar akmal</span>
            <span className="mt-1 profileId">#9963</span>
          </div>
          <div className="grid grid-cols-3 gap-2 mt-2 ml-5">
            <button className="iconButton">
              <i className=" fas fa-microphone icon"></i>
            </button>
            <button className="iconButton">
              <i className="fas fa-headphones icon"></i>{" "}
            </button>
            <button className="iconButton">
              <i className="fas fa-cog icon"></i>{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SidebarFriendList;
