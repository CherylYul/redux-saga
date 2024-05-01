import { BUY_CAKE, RESTOCK_CAKE } from "./cakeTypes";

const initialState = {
  numOfCakes: 10,
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
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - action.payload.number,
      };
    case RESTOCK_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes + action.payload.qty,
      };
    default:
      return state;
  }
};
