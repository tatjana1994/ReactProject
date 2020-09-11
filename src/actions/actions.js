import requestApi from "../api/request";
import { UPDATE_INFO } from "../action-types/index";

export function loadNameInfo() {
  return (dispatch) => {
    try {
      requestApi().then((data) => {
        dispatch(updateInfo(data));
      });
    } catch (error) {
      console.log(error);
    }
  };
}

const updateInfo = (data) => {
  return {
    type: UPDATE_INFO,
    ...data,
  };
};
