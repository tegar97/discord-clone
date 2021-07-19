import React from "react";

function NoUserOnline() {
  return (
    <div className="flex flex-col items-center justify-center col-span-4 -mt-56">
      <img
        src="https://discord.com/assets/a12ff54c4c5c03b41006fd96a4709c29.svg"
        className="imageNoUser"
      />
      <span className="nonActiveMenu">There are no online user</span>
    </div>
  );
}

export default NoUserOnline;
