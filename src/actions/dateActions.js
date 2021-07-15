import { DATE_SUCCESS, DATE_FAIL } from "../constants/dateConstants";

const datepreview = (startdate, value) => async (dispatch) => {
  let month = startdate.getMonth();
  let year = startdate.getFullYear();

  let firstDay = new Date(year, month, startdate.getDate()).getDay();
  let days = new Date(year, month + 1, 0).getDate();
  let date = startdate.getDate();
  let interval = new Date(startdate);
  let child = "";
  for (let i = 0; i < 3; i++) {
    let row = "<tr>";
    for (let j = 0; j < 7; j++) {
      if (i === 0 && j < firstDay) {
        row += "<td></td>";
      } else {
        if (value === "everyday") {
          row += "<td class='active'><span>" + date + "</span></td>";
        } else if (value === "alter") {
          if (date === interval.getDate()) {
            row += "<td class='active'><span>" + date + "</span></td>";
            interval.setDate(interval.getDate() + 2);
          } else {
            row += "<td><span>" + date + "</span></td>";
          }
        } else if (value === "third") {
          if (date === interval.getDate()) {
            row += "<td class='active'><span>" + date + "</span></td>";
            interval.setDate(interval.getDate() + 3);
          } else {
            row += "<td><span>" + date + "</span></td>";
          }
        } else if (value === "fourth") {
          if (date === interval.getDate()) {
            row += "<td class='active'><span>" + date + "</span></td>";
            interval.setDate(interval.getDate() + 4);
          } else {
            row += "<td><span>" + date + "</span></td>";
          }
        } else {
          row += "<td><span>" + date + "</span></td>";
        }
        date++;
        if (date > days) {
          date = 1;
          month = month + 1;
        }
      }
    }
    row += "</tr>";
    child += row;
  }

  try {
    dispatch({
      type: DATE_SUCCESS,
      payload: child,
    });
  } catch (error) {
    dispatch({ type: DATE_FAIL, payload: error.message });
  }
};

export { datepreview };
