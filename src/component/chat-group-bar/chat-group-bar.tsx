import React from "react";
import ChatGroupHeader from "../chat-group-header/chat-group-header";
import "./chat-group-bar.scss";

function ChatGroupBar() {
  return (
    <div className="relative overflow-hidden ChatGroupContainer">
      <ChatGroupHeader />
      <div className="absolute w-full px-4 bottom-5 ">
        <div className="flex flex-row mb-5">
          <img
            src="https://discord.com/assets/6f26ddd1bf59740c536d2274bb834a05.png"
            alt="dummy photo"
            className="rounded-full cursor-pointer"
            style={{ width: "40px", height: "40px" }}
          />
          <div className="flex flex-col ml-3">
            <div className="flex flex-row">
              <h2>
                <span className="font-bold text-white">tegar akmal</span>
                <span className="ml-2 date">Today at 4:11 PM</span>
              </h2>
            </div>
            <div className="markup">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad
              doloribus culpa, odio, labore enim soluta eveniet laudantium
              dolorem ea inventore, voluptates assumenda et officiis quia quos
              sapiente odit cumque?
            </div>
          </div>
        </div>
        <div className="relative flex items-center">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="absolute icon left-2 "
          >
            <path
              fill="currentColor"
              d="M12 2.00098C6.486 2.00098 2 6.48698 2 12.001C2 17.515 6.486 22.001 12 22.001C17.514 22.001 22 17.515 22 12.001C22 6.48698 17.514 2.00098 12 2.00098ZM17 13.001H13V17.001H11V13.001H7V11.001H11V7.00098H13V11.001H17V13.001Z"
            ></path>
          </svg>
          <input
            className="w-full px-10 py-3 chat-group-input"
            placeholder="Message #tess"
          />
        </div>
      </div>
    </div>
  );
}

export default ChatGroupBar;
