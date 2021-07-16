import React from "react";
import "./../section-1/section-1";
import "./section-2.scss";
function Section2() {
  return (
    <div className="container w-full">
      <div className="grid grid-cols-1 px-10 md:grid-cols-2 md:py-20 md:w-full md:items-center lg:grid-cols-2 lg:py-20 lg:px-44">
        <div className="flex flex-col lg:w-2/3 md:w-full ">
          <h2 className="font-bold text-gray-800 text-main">
            Where hanging out is easy
          </h2>
          <span className="text-xl text-gray-800">
            Grab a seat in a voice channel when you’re free. Friends in your
            server can see you’re around and instantly pop in to talk without
            having to call.
          </span>
        </div>
        <img
          src="/assets/images/i-2.svg"
          className="order-first md:order-last lg:order-last"
          alt="Where hanging out is easy"
        />
      </div>
    </div>
  );
}

export default Section2;
