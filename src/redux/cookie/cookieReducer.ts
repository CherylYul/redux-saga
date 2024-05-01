import { BUY_COOKIE, RESTOCK_COOKIE } from "./cookieTypes";

const initialState = {
  numOfCookies: 20,
};

export default (
  state = initialState,
  action: {
    type: string;
    payload: {
      number: number;
      qty: number;
    };
  }
) => {
  switch (action.type) {
    case BUY_COOKIE:
      return {
        ...state,
        numOfCookies: state.numOfCookies - action.payload.number,
      };
    case RESTOCK_COOKIE:
      return {
        ...state,
        numOfCookies: state.numOfCookies + action.payload.qty,
      };
    default:
      return state;
  }
};
