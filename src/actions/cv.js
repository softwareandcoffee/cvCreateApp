import {
  GET_CV_SUCCESS,
  GET_CV_FAIL,
} from "./types";

import AuthService from "../services/cv.service";
import jwt_decode from "jwt-decode";

export const getUserCVFunc = (username) => (dispatch) => {
  return AuthService.getUserCV(username).then(
    (data) => {

      console.log("cv data: ", data);
      dispatch({
        type: GET_CV_SUCCESS,
        payload: {userCV: data},
      });

      return Promise.resolve();
    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: GET_CV_FAIL,
      });
    
      return Promise.reject();
    }
  );
};
