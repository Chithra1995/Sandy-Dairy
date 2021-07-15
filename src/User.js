import React, { useState } from "react";
import axios from "axios";
export default function User() {
  const [username, setUsername] = useState("");
  const [yourotp, setYourotp] = useState("");
  const Requestotp = () => {
    axios
      .post("https://demo3.gyso.in/index.php?route=feed/rest_api/signin", {
        userdata: "8124667482",
      })
      .then((response) => {
        console.log(response.data);
      });
  };

  const Verifyotp = () => {
    axios
      .post("https://demo3.gyso.in/index.php?route=feed/rest_api/signinotp", {
        userdata: "8124667482",
        otp: yourotp,
      })
      .then((response) => {
        console.log(response);
      });
  };

  return (
    <div>
      <div className="container my-5">
        <form className="py-2">
          <input
            type="text"
            className="form-control mb-2"
            placeholder="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          ></input>
          <button
            type="button"
            className="btn btn-primary"
            onClick={Requestotp}
          >
            Login with Otp
          </button>
        </form>
        <form>
          <input
            type="text"
            className="form-control mb-2"
            placeholder="enter otp"
            value={yourotp}
            onChange={(e) => setYourotp(e.target.value)}
          ></input>
          <button type="button" className="btn btn-success" onClick={Verifyotp}>
            Verify
          </button>
        </form>
      </div>
    </div>
  );
}
