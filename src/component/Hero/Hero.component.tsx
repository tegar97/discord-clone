import React from "react";
import "./Hero.scss";
function Hero() {
  return (
    <div className="hero">
      <div className="flex flex-col items-center justify-center h-full textContainer">
        <div className="flex flex-col w-1/2 -mt-20 text-center text">
          <h1 className="text__main">IMAGINE A PLACE...</h1>
          <div className=" text__sub">
            ...where you can belong to a school club, a gaming group, or a
            worldwide art community. Where just you and a handful of friends can
            spend time together. A place that makes it easy to talk every day
            and hang out more often.
          </div>
        </div>
        <div className="flex mt-10">
          <button className="py-4 text-xl font-bold text-gray-800 bg-white rounded-full px-7">
            Open Discord in your browser
          </button>
          <button className="py-4 ml-5 text-xl font-bold text-white bg-gray-800 rounded-full px-7">
            Open Discord in your browser
          </button>
        </div>
      </div>
      <div className="imageCointaner">
        <img src="/assets/images/1.svg" alt="" className="image1" />
        <img src="/assets/images/2.svg" alt="" className="image2" />
        <img src="/assets/images/3.svg" alt="" className="image3" />
      </div>
    </div>
  );
}

export default Hero;
