import { BUY_COOKIE, RESTOCK_COOKIE } from "./cookieTypes";

export const buyCookie = (number = 1) => {
  return {
    type: BUY_COOKIE,
    payload: number,
  };
};

export const restockCookie = (qty = 1) => {
  return {
    type: RESTOCK_COOKIE,
    payload: qty,
  };
};
