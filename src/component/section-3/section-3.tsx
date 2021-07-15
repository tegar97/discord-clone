import React from "react";
import "./../section-1/section-1";
function Section3() {
  return (
    <div>
      <div className="grid grid-cols-3 py-20 px-44">
        <img
          src="/assets/images/i-3.svg"
          className="col-span-2"
          alt=" Create an invite-only place where you belong"
        />
        <div className="flex flex-col ">
          <h2 className="font-bold text-gray-800 text-main">
            From few to a fandom
          </h2>
          <span className="text-xl text-gray-800">
            Get any community running with moderation tools and custom member
            access. Give members special powers, set up private channels, and
            more.
          </span>
        </div>
      </div>
    </div>
  );
}

export default Section3;
