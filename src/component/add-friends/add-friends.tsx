import React from "react";
import "./add-friends.scss";
function AddFriends() {
  return (
    <div className="col-span-4 ">
      <div className="px-10 py-5 addFriendContainer">
        <h2 className="font-bold text-white">ADD FRIENDS</h2>
        <p style={{ color: "#b1b3b6" }}>
          You can add a friend with their Discord tag ,it's cAse sEnSitive !
        </p>
        <div className="relative flex items-center w-full mt-5">
          <input
            placeholder="Enter username#0000"
            className="w-full px-3 py-4 addFriendsInput"
            maxLength={32}
          />
          <button
            className="absolute px-3 py-1 font-bold text-white right-2"
            style={{ backgroundColor: "#5865f2" }}
          >
            Send Friend Request
          </button>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center h-full -mt-32">
        <img src="https://discord.com/assets/b5eb2f7d6b3f8cc9b60be4a5dcf28015.svg" />
        <span className="mt-5 nonActiveMenu">
          Wampus is waiting on friends, You dont't have to thought!
        </span>
      </div>
    </div>
  );
}

export default AddFriends;
