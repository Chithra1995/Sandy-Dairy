import React, { useState } from "react";
import Deliverydate from "./Deliverydate";
import { useDispatch } from "react-redux";
import { datepreview } from "../actions/dateActions";

export default function Deliveryschedule(props) {
  const dispatch = useDispatch();
  const [datevalue, setDatevalue] = useState("");
  const [intervalue, setIntervalue] = useState("");

  let selectedDate = props.selectedDate;

  const selectinterval = (value) => {
    setIntervalue(value);
    dispatch(datepreview(selectedDate, value));
  };

  const SelectSchedule = (value) => {
    setDatevalue(value);
    setIntervalue("");
    dispatch(datepreview(selectedDate, value));
  };

  return (
    <div>
      <div className="row delivery-schedule">
        <div className="col-md-3">
          <div class="form-check cst_del_radio ">
            <input
              class="form-check-input"
              type="radio"
              name="delschedule"
              id="everyday"
              value="everyday"
              onChange={(e) => SelectSchedule(e.target.value)}
              checked={datevalue === "everyday" ? true : false}
            />
            <label class="form-check-label" for="everyday">
              Everyday
            </label>
          </div>
        </div>
        <div className="col-md-3">
          <div class="form-check cst_del_radio ">
            <input
              class="form-check-input"
              type="radio"
              name="delschedule"
              id="oneday"
              value="oneday"
              checked={datevalue === "oneday" ? true : false}
              onChange={(e) => SelectSchedule(e.target.value)}
            />
            <label class="form-check-label" for="oneday">
              Oneday
            </label>
          </div>
        </div>
        <div className="col-md-3">
          <div class="form-check cst_del_radio ">
            <input
              class="form-check-input"
              type="radio"
              name="delschedule"
              id="interval"
              value="interval"
              checked={datevalue === "interval" ? true : false}
              onChange={(e) => SelectSchedule(e.target.value)}
            />
            <label class="form-check-label" for="interval">
              On Intervals
            </label>
          </div>
        </div>
        <div className="col-md-3">
          <div class="form-check cst_del_radio ">
            <input
              class="form-check-input"
              type="radio"
              name="delschedule"
              id="customize"
              value="customize"
              checked={datevalue === "customize" ? true : false}
              onChange={(e) => SelectSchedule(e.target.value)}
            />
            <label class="form-check-label" for="customize">
              Customize
            </label>
          </div>
        </div>
        {datevalue === "everyday" && (
          <div className="col-md-12">
            <Deliverydate />
          </div>
        )}
        {datevalue === "interval" && (
          <div className="col-md-12">
            <ul className="d-flex flex-wrap oninterval-tab">
              <li>
                <a
                  className={intervalue === "alter" ? "active" : ""}
                  onClick={() => selectinterval("alter")}
                >
                  Alternate days
                </a>
              </li>
              <li>
                <a
                  className={intervalue === "third" ? "active" : ""}
                  onClick={() => selectinterval("third")}
                >
                  Every third day
                </a>
              </li>
              <li>
                <a
                  className={intervalue === "fourth" ? "active" : ""}
                  onClick={() => selectinterval("fourth")}
                  data-toggle={intervalue === "fourth" ? true : false}
                >
                  Every fourth day
                </a>
              </li>
            </ul>
            {intervalue && <Deliverydate />}
          </div>
        )}
        {datevalue === "customize" && (
          <div className="col-md-12">
            <Deliverydate schedule={datevalue} />
          </div>
        )}
      </div>
    </div>
  );
}
