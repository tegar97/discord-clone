import React from "react";
import "./../section-1/section-1";
import "./../section-2/section-2.scss";
import "./section-4.scss";
function Section4() {
  return (
    <div className="container grid grid-cols-1 px-5 py-10 lg:py-20 lg:px-44">
      <div className="flex flex-col lg:text-center ">
        <h2 className="font-bold text-gray-800 text-main">
          RELIABLE TECH FOR STAYING CLOSE
        </h2>
        <span className="text-xl text-gray-800">
          Low-latency voice and video feels like you’re in the same room. Wave
          hello over video, watch friends stream their games, or gather up and
          have a drawing session with screen share
        </span>
      </div>
      <img
        src="/assets/images/i-4.svg"
        alt=" Create an invite-only place where you belong"
        className="w-full"
      />
      <div className="relative mt-10 text-center">
        <div className="imageContainer">
          <img src="/assets/images/star.svg" alt="" />
        </div>
        <span
          className="font-bold text-gray-800 text-main"
          style={{ fontSize: "2rem" }}
        >
          Ready to start your journey?
        </span>
        <button
          className="py-4 text-xl font-bold text-white rounded-full px-7"
          style={{ backgroundColor: "#5865f2" }}
        >
          Download For Windows
        </button>
      </div>
    </div>
  );
}

export default Section4;
