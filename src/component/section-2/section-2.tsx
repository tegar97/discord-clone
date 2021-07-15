import React from "react";
import "./../section-1/section-1";
import "./section-2.scss";
function Section2() {
  return (
    <div className="container">
      <div className="grid grid-cols-2 py-20 px-44">
        <div className="flex flex-col w-2/3 ">
          <h2 className="font-bold text-gray-800 text-main">
            Where hanging out is easy
          </h2>
          <span className="text-xl text-gray-800">
            Grab a seat in a voice channel when you’re free. Friends in your
            server can see you’re around and instantly pop in to talk without
            having to call.
          </span>
        </div>
        <img src="/assets/images/i-2.svg" alt="Where hanging out is easy" />
      </div>
    </div>
  );
}

export default Section2;
