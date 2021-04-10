import * as ActionType from "./constant";
import axios from "axios";
const actListMovieRequest = () => {
  return {
    type: ActionType.LIST_MOVIE_REQUEST,
  };
};

const actListMovieSuccess = (data) => {
  return {
    type: ActionType.LIST_MOVIE_SUCCESS,
    payload: data,
  };
};

const actListMovieFailed = (err) => {
  return {
    type: ActionType.LIST_MOVIE_FAILED,
    payload: err,
  };
};

export const actFecthListMovie = () => {
  return (dispatch) => {
    dispatch(actListMovieRequest());
    axios({
      url:
        "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01",
      method: "GET",
    })
      .then((result) => {
        // resolve
        dispatch(actListMovieSuccess(result.data));
      })
      .catch((err) => {
        dispatch(actListMovieFailed(err));
        // reject
      });
  };
};
