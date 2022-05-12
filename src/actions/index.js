import jsonPlaceHolder from "../apis/jsonPlaceHolder";
// when we use a middleware like redux-thunk in our redux, we can pass a function to action creators and it takes two argument named dispatch amd getState and do not need to return an object inside of that, so we call dispatch and make an object inside of that
export const fetchPosts = () => async (dispatch) => {
  //we use es 2020 features and just first argument (dispatch) is needed to use and because of arrow function we remove first return
  const response = await jsonPlaceHolder.get("/posts");

  dispatch({ type: "FETCH_POSTS", payload: response.data });
};

export const fetchUser = (id) => async (dispatch) => {
  const response = await jsonPlaceHolder.get(`users/${id}`);
  dispatch({ type: "FETCH_USER", payload: response.data });
};
