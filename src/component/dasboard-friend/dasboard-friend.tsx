import React from "react";
import "./dasboard-friend.scss";
function DasboardFriend() {
  return (
    <div className="overflow-hidden dasboard-friend">
      <div className="justify-between p-3 dasboard-header">
        <div className="flex flex-row ">
          <div className="flex flex-row">
            <svg
              x="0"
              y="0"
              className="dasboard-icon"
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
            <span className="ml-2 font-bold text-white textIcon">Friends</span>
            <div className="ml-4 borderHeader ">&nbsp;</div>
          </div>
          <div className="grid grid-cols-5 gap-1 ml-5">
            <button className="font-bold text-white ActiveMenu">Online</button>
            <button className="font-bold text-white nonActiveMenu">All</button>
            <button className="font-bold text-white nonActiveMenu">
              Pending
            </button>
            <button className="font-bold text-white nonActiveMenu">
              Blocked
            </button>
            <button className="px-2 font-bold text-white headerMenuButton">
              Add Friend
            </button>
          </div>
        </div>
        <div>
          <button className="mr-10">
            <svg
              x="0"
              y="0"
              className="icon"
              aria-hidden="false"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M20.998 0V3H23.998V5H20.998V8H18.998V5H15.998V3H18.998V0H20.998ZM2.99805 20V24L8.33205 20H14.998C16.102 20 16.998 19.103 16.998 18V9C16.998 7.896 16.102 7 14.998 7H1.99805C0.894047 7 -0.00195312 7.896 -0.00195312 9V18C-0.00195312 19.103 0.894047 20 1.99805 20H2.99805Z"
              ></path>
            </svg>
          </button>
          <button className="mr-5">
            <svg
              x="0"
              y="0"
              className="icon"
              aria-hidden="false"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M19 3H4.99C3.88 3 3.01 3.89 3.01 5L3 19C3 20.1 3.88 21 4.99 21H19C20.1 21 21 20.1 21 19V5C21 3.89 20.1 3 19 3ZM19 15H15C15 16.66 13.65 18 12 18C10.35 18 9 16.66 9 15H4.99V5H19V15Z"
                fill="currentColor"
              ></path>
            </svg>
          </button>
          <button>
            <svg
              x="0"
              y="0"
              className="icon"
              aria-hidden="false"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M12 2C6.486 2 2 6.487 2 12C2 17.515 6.486 22 12 22C17.514 22 22 17.515 22 12C22 6.487 17.514 2 12 2ZM12 18.25C11.31 18.25 10.75 17.691 10.75 17C10.75 16.31 11.31 15.75 12 15.75C12.69 15.75 13.25 16.31 13.25 17C13.25 17.691 12.69 18.25 12 18.25ZM13 13.875V15H11V12H12C13.104 12 14 11.103 14 10C14 8.896 13.104 8 12 8C10.896 8 10 8.896 10 10H8C8 7.795 9.795 6 12 6C14.205 6 16 7.795 16 10C16 11.861 14.723 13.429 13 13.875Z"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      <div className="grid h-full grid-cols-6 ">
        <div className="flex flex-col items-center justify-center col-span-4 -mt-56">
          <img
            src="https://discord.com/assets/a12ff54c4c5c03b41006fd96a4709c29.svg"
            className="imageNoUser"
          />
          <span className="nonActiveMenu">There are no online user</span>
        </div>
        <div className="w-full h-full col-span-2 p-5 activeUser">
          <h2 className="text-xl font-bold text-white ">Active Now</h2>
          <div className="flex flex-col items-center justify-center mt-5 text-center">
            <span className="text-white">it's quiet for now</span>
            <span style={{ color: "#b9bbbe", fontSize: "15px", width: "80%" }}>
              When a friend starts an activity—like playing a game or hanging
              out on voice—we’ll show it here!
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DasboardFriend;
