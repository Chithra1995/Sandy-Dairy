import React, { useState } from "react";
import RoomRoundedIcon from "@material-ui/icons/RoomRounded";
import { locationinfo } from "../actions/locationActions";
import { useDispatch, useSelector } from "react-redux";

export default function LocationDesign() {
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const locationInfo = useSelector((state) => state.locationInfo);
  const { addressinfo, addresserror } = locationInfo;
  const getlocation = () => {
    function success(position) {
      const address = `${position.coords.latitude},${position.coords.longitude}`;
      dispatch(locationinfo(address));
    }

    function error() {
      setError("Unable to retrieve your location");
    }

    if (!navigator.geolocation) {
      setError("Geolocation is not supported by your browser");
    } else {
      navigator.geolocation.getCurrentPosition(success, error);
    }
  };

  return (
    <div>
      <div className="loc-pop-box">
        {addressinfo && console.log(addressinfo)}
        <h2>
          Welcome to<span className="dairy-txt"> POORVIKA DAIRY</span>
        </h2>
        <div className="dis-flx py-2 wid-half">
          <RoomRoundedIcon />
          <h4>
            Please provide us your location to see products at nearby store
          </h4>
        </div>
        <div className="dis-flx py-2 align-items-center">
          <button
            type="submit"
            className="pl-2 dtct-loc-btn"
            id="find-me"
            onClick={getlocation}
          >
            Detect my location
          </button>
          <div className="bwtn-or-color">
            -<span className="rnd-or-txt">OR</span>-
          </div>
          <input
            type="text"
            aria-label="Type your city society"
            placeholder="Type your city society"
            className="loc-txt-box"
          ></input>
        </div>
      </div>
    </div>
  );
}
