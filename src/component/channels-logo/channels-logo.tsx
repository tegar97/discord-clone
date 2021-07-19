import React from "react";
import { Link, useParams } from "react-router-dom";
import "./Channels-logo.scss";
function ChannelsLogo({ image, meChannel }: any) {
  return (
    <Link to="/channels/14124/24124">
      <div className="mb-5 cursor-pointer">
        <div className={` logoBox `}>
          <img
            src={image}
            alt="channel logo"
            className={`block object-cover w-full h-full pointer-events-none rounded-3xl `}
            style={{ textIndent: "-9999px" }}
          />
        </div>
        {meChannel && (
          <div className="flex justify-center w-full">
            <div
              className="w-2/3 mt-3 "
              style={{ height: "2px", backgroundColor: "#2d2f32" }}
            >
              &nbsp;
            </div>
          </div>
        )}
      </div>
    </Link>
  );
}

export default ChannelsLogo;
