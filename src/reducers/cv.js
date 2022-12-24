import { GET_CV_SUCCESS, GET_CV_FAIL } from "../actions/types";

const initialState = user
  ? { isLoggedIn: true, user }
  : { isLoggedIn: false, user: null };

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_CV_SUCCESS:
      return {
        ...state,
        isFail: false,
        userCV: payload.userCV,
      };
    case GET_CV_FAIL:
      return {
        ...state,
        isFail: true,
        user: null,
      };
    default:
      return state;
  }
}
