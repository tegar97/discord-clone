import React from "react";
import "./section1.scss";
function Section1() {
  return (
    <div>
      <div className="grid grid-cols-1 px-10 py-20 lg:grid-cols-3 lg:px-44 md:grid-cols-2 md:px-20 md:items-center">
        <img
          src="/assets/images/i-1.svg"
          className="lg:col-span-2"
          alt=" Create an invite-only place where you belong"
        />
        <div className="flex flex-col ">
          <h2 className="font-bold text-gray-800 text-main">
            Create an invite-only place where you belong
          </h2>
          <span className="text-xl text-gray-800">
            Discord servers are organized into topic-based channels where you
            can collaborate, share, and just talk about your day without
            clogging up a group chat.
          </span>
        </div>
      </div>
    </div>
  );
}

export default Section1;
