import { BUY_COOKIE } from "./cookieTypes";

const initialState = {
  numOfCookies: 20,
};

export default (state = initialState, action: { type: string }) => {
  switch (action.type) {
    case BUY_COOKIE:
      return {
        ...state,
        numOfCookies: state.numOfCookies - 1,
      };
    default:
      return state;
  }
};
