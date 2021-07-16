import React from "react";
import "./footer.scss";
function Footer() {
  return (
    <div className="grid justify-center grid-cols-1 px-10 py-20 lg:grid-cols-3 lg:px-36 footer items">
      <div className="col-span-1">
        <span className="text-main">IMAGINE A PLACE</span>
      </div>
      <div className="grid grid-cols-2 gap-10 lg:gap-40 lg:grid-cols-4 lg:col-span-2 ">
        <div>
          <ul>
            <li className="mb-2 text-lg font-bold" style={{ color: "#5865f2" }}>
              Product
            </li>
            <li className="mb-2 text-lg text-white">Download</li>
            <li className="mb-2 text-lg text-white"> Nitro</li>
            <li className="mb-2 text-lg text-white"> Status</li>
          </ul>
        </div>
        <div>
          <ul>
            <li className="mb-2 text-lg font-bold" style={{ color: "#5865f2" }}>
              Company
            </li>
            <li className="mb-2 text-lg text-white">About</li>
            <li className="mb-2 text-lg text-white"> Jobs</li>
            <li className="mb-2 text-lg text-white"> Branding</li>
            <li className="mb-2 text-lg text-white"> Newsrsooms</li>
          </ul>
        </div>
        <div>
          <ul>
            <li className="mb-2 text-lg font-bold" style={{ color: "#5865f2" }}>
              Resourcess
            </li>
            <li className="mb-2 text-lg text-white">About</li>
            <li className="mb-2 text-lg text-white"> Jobs</li>
            <li className="mb-2 text-lg text-white"> Branding</li>
            <li className="mb-2 text-lg text-white"> Newsrsooms</li>
          </ul>
        </div>
        <div>
          <ul>
            <li className="mb-2 text-lg font-bold" style={{ color: "#5865f2" }}>
              Policies
            </li>
            <li className="mb-2 text-lg text-white">About</li>
            <li className="mb-2 text-lg text-white"> Jobs</li>
            <li className="mb-2 text-lg text-white"> Branding</li>
            <li className="mb-2 text-lg text-white"> Newsrsooms</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
