import {
  FETCH_USER_FAILURE,
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
} from "./userTypes";

const initialState = {
  loading: true,
  data: [],
  error: "",
};

export default (
  state = initialState,
  action: {
    type: string;
    payload: {
      data: [string];
      error: string;
    };
  }
) => {
  switch (action.type) {
    case FETCH_USER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_USER_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case FETCH_USER_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };
  }
};
