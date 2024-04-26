import { BUY_CAKE } from "./cakeTypes";

const initialState = {
  numOfCakes: 10,
};

export default (
  state = initialState,
  action: { type: string; payload: number }
) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - action.payload,
      };
    default:
      return state;
  }
};
