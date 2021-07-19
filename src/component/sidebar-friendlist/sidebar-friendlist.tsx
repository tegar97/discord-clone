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
      <div className="p-2 sidebar-friendlist__body ">
        <div className="sidebar-box">
          <div className="flex flex-row items-center px-3 py-2 mb-5 cursor-pointer menuActive">
            <svg
              className=""
              aria-hidden="false"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <g fill="none" fill-rule="evenodd">
                <path
                  fill="currentColor"
                  fill-rule="nonzero"
                  d="M0.5,0 L0.5,1.5 C0.5,5.65 2.71,9.28 6,11.3 L6,16 L21,16 L21,14 C21,11.34 15.67,10 13,10 C13,10 12.83,10 12.75,10 C8,10 4,6 4,1.5 L4,0 L0.5,0 Z M13,0 C10.790861,0 9,1.790861 9,4 C9,6.209139 10.790861,8 13,8 C15.209139,8 17,6.209139 17,4 C17,1.790861 15.209139,0 13,0 Z"
                  transform="translate(2 4)"
                ></path>
                <path d="M0,0 L24,0 L24,24 L0,24 L0,0 Z M0,0 L24,0 L24,24 L0,24 L0,0 Z M0,0 L24,0 L24,24 L0,24 L0,0 Z"></path>
              </g>
            </svg>
            <span className="ml-3 font-bold text-md">Friends</span>
          </div>
          <div className="flex flex-row items-center justify-between">
            <span className="sidebar-friendlist__body__header_text">
              DIRECT MESSAGES
            </span>
            <i
              className=" fas fa-plus"
              style={{ fontSize: "0.75rem", color: "#8e9297" }}
            ></i>
          </div>
          <div className="mt-5 ">
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
    </div>
  );
}

export default SidebarFriendList;
