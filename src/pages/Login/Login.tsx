import React from "react";
import { Link } from "react-router-dom";
import "./Login.scss";
function Login() {
  return (
    <div
      className="AuthContainer"
      style={{ background: "url('assets/images/login_bg.jpg')" }}
    >
      <div className="flex flex-row grid-cols-2 LoginContainer">
        <div className="InputGroup">
          <div>
            <h1 className="mb-3 LoginWelcome">Welcome Back</h1>
            <span className="font-bold text-md" style={{ color: "#919498" }}>
              We're so excite to see you again
            </span>
          </div>
          <div className="mt-5">
            <div className="FormInput">
              <label className="mb-2 font-bold" style={{ color: "#828488" }}>
                Email Adress
              </label>
              <input className="InputAuth" />
            </div>
            <div className="FormInput">
              <label className="mb-2" style={{ color: "#828488" }}>
                Password
              </label>
              <input className="InputAuth" type="password" />
            </div>
            <span className="font-bold" style={{ color: "#099cd7" }}>
              Forgot Your Password ?
            </span>
            <button
              className="w-full px-2 py-2 mt-5 text-lg font-bold text-white"
              style={{ backgroundColor: "#5865f2" }}
            >
              Login
            </button>
            <div className="mt-5">
              <span style={{ color: "#7d828b" }}>
                {" "}
                Need Account ?{" "}
                <Link to="/register">
                  <span className="font-bold" style={{ color: "#099cd7" }}>
                    Register!
                  </span>
                </Link>{" "}
              </span>
            </div>
          </div>
        </div>
        <div
          className="flex-col items-center justify-center hidden w-full lg:flex "
          style={{ flex: 1 }}
        >
          <img
            alt="Scan me!"
            src="data:image/png;base64,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"
          ></img>
          <div className="flex flex-col mt-5 text-center">
            <span className="LoginWelcome">Login With Barcode</span>
            <span style={{ color: "#95979b" }} className="mt-3">
              Scan this with the Discord Mobile app to log in instantly
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
