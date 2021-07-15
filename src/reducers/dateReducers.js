import { DATE_SUCCESS, DATE_FAIL } from "../constants/dateConstants";

function datepreviewReducer(state = {}, action) {
  switch (action.type) {
    case DATE_SUCCESS:
      return { datesuccess: action.payload };
    case DATE_FAIL:
      return { dateerror: action.payload };
    default:
      return state;
  }
}

export { datepreviewReducer };
