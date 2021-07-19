import React from "react";

function ProfileBox() {
  return (
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
  );
}

export default ProfileBox;
