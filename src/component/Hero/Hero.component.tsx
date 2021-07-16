import React from "react";
import "./Hero.scss";
function Hero() {
  return (
    <div className="hero">
      <div className="flex flex-col justify-center h-full lg:items-center textContainer">
        <div className="flex flex-col -mt-56 md:-mt-20 lg:-mt-20 lg:w-1/2 lg:text-center text">
          <h1 className="text__main">IMAGINE A PLACE...</h1>
          <div className=" text__sub">
            ...where you can belong to a school club, a gaming group, or a
            worldwide art community. Where just you and a handful of friends can
            spend time together. A place that makes it easy to talk every day
            and hang out more often.
          </div>
        </div>
        <div className="flex flex-col w-2/3 mt-10 lg:justify-center lg:flex-col lg:w-1/3 xl:flex-row xl:w-full">
          <button className="py-4 text-lg font-bold text-gray-800 bg-white rounded-full lg:text-xl xl:px-7 ">
            Download For Windows
          </button>
          <button className="py-4 mt-2 text-lg font-bold text-white bg-gray-800 rounded-full lg:mt-5 xl:mt-0 xl:ml-5 lg:text-xl xl:px-7">
            Open Discord in your browser
          </button>
        </div>
      </div>
      <div className="imageCointaner">
        <img src="/assets/images/1.svg" alt="" className="image1" />
        <img src="/assets/images/2.svg" alt="" className=" image2" />
        <img src="/assets/images/3.svg" alt="" className="image3" />
      </div>
    </div>
  );
}

export default Hero;
