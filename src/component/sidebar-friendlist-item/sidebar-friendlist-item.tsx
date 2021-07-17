import React from "react";
import "./sidebar-friendlist-item.scss";
function SidebarFriendListItem() {
  return (
    <div className="flex flex-row items-center mb-3 cursor-pointer">
      <img
        src="https://cdn.discordapp.com/avatars/628468928594706432/5c5579660f787a4afcb8740c77de882c.png?size=256"
        alt="image of "
        className="rounded-full imageProfile "
      />
      <span className="ml-3 profileText">ShiroNeko</span>
    </div>
  );
}

export default SidebarFriendListItem;
