import * as ActionType from "./constant";

let initialState = {
  loading: false,
  data: null,
  error: null,
};
const listMovieReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LIST_MOVIE_REQUEST:
      state.loading = true; 
      state.data = null;
      state.errror = null;
    // return {...state};

    case ActionType.LIST_MOVIE_SUCCESS:
        state.loading = false;
        state.data = action.payload;
        state.errror = null;
    // return {..state};

    case ActionType.LIST_MOVIE_FAILED:
        state.loading = false;
        state.data = action.payload;
        state.errror = null;
    // return {..state};
    default:
      return { ...state };
  }
};
export default listMovieReducer;
