import React, { useState } from "react";
import { useSelector } from "react-redux";
import RemoveCircleSharpIcon from "@material-ui/icons/RemoveCircleSharp";
import AddCircleSharpIcon from "@material-ui/icons/AddCircleSharp";

export default function SubscriptionDateFormat(props) {
  const day = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sat"];
  const counter = [
    { id: 1, day: "SU", qty: 0 },
    { id: 2, day: "MO", qty: 0 },
    { id: 3, day: "TU", qty: 0 },
    { id: 4, day: "WE", qty: 0 },
    { id: 5, day: "TH", qty: 0 },
    { id: 6, day: "FR", qty: 0 },
    { id: 7, day: "SA", qty: 0 },
  ];
  const [week, setWeek] = useState(counter);

  const incrmnt = (id, quant) => {
    let data = [...week];
    let index = data.findIndex((x) => x.id === id);
    data[index].qty = quant + 1;
    setWeek(data);
  };
  const dcrmnt = (id, quant) => {
    let data = [...week];
    let index = data.findIndex((x) => x.id === id);
    data[index].qty = quant - 1;
    setWeek(data);
  };

  const datePreview = useSelector((state) => state.datePreview);
  const { datesuccess, dateerror } = datePreview;

  return (
    <div>
      <div className="subs-date-format">
        {props.schedule === "customize" ? (
          <div className="customized-count">
            <h4>Repeat For a Month</h4>
            <table>
              <tr>
                {week.map((weekday) => (
                  <th>{weekday.day}</th>
                ))}
              </tr>
              <tr>
                {week.map((weekday) => (
                  <td key={weekday} className="text-center">
                    <button
                      className="no-btn-brdr"
                      type="button"
                      disabled={weekday.qty === 0 ? true : false}
                      onClick={() => dcrmnt(weekday.id, weekday.qty)}
                    >
                      <RemoveCircleSharpIcon className="customized-icon-btn" />
                    </button>
                    <br></br>
                    <span>{weekday.qty}</span>
                    <br></br>{" "}
                    <button
                      className="no-btn-brdr"
                      type="button"
                      onClick={() => incrmnt(weekday.id, weekday.qty)}
                    >
                      <AddCircleSharpIcon className="customized-icon-btn" />
                    </button>
                    <br></br>
                  </td>
                ))}
              </tr>
            </table>
          </div>
        ) : (
          datesuccess && (
            <div>
              <h4>Schedule Preview</h4>
              <div className="table">
                <table className="spacer">
                  <tr>
                    {day.map((weekday) => (
                      <th>{weekday}</th>
                    ))}
                  </tr>
                  <tbody
                    id="calendar-body"
                    dangerouslySetInnerHTML={{ __html: datesuccess }}
                  ></tbody>
                </table>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}
