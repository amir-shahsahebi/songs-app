import _ from "lodash"; // this is a lodash library

//   // simple form of function (action creator)
// export const fetchUser = function (id) {
//   return async function (dispatch) {
//     const response = await jsonPlaceHolder.get(`users/${id}`);
//     dispatch({ type: "FETCH_USER", payload: response.data });
//   };
// };

import jsonPlaceHolder from "../apis/jsonPlaceHolder";
// when we use a middleware like redux-thunk in our redux, we can pass a function to action creators and it takes two argument named dispatch amd getState and do not need to return an object inside of that, so we call dispatch and make an object inside of that
export const fetchPosts = () => async (dispatch) => {
  //we use es 2020 features and just first argument (dispatch) is needed to use and because of arrow function we remove first return
  const response = await jsonPlaceHolder.get("/posts");

  dispatch({ type: "FETCH_POSTS", payload: response.data });
};

// export const fetchUser = (id) => async (dispatch) => {
//   const response = await jsonPlaceHolder.get(`users/${id}`);
//   dispatch({ type: "FETCH_USER", payload: response.data });
// };

// // we use memoize in external function to avoid from repetitive request for repetitive id but issue still exist so try to change inner function
// export const fetchUser = _.memoize(function (id) {
//   // memoize is a function from lodash library that return a function and of the argument (id in this func) is repetitive, it wont work and its benefit of that
//   return async function (dispatch) {
//     const response = await jsonPlaceHolder.get(`users/${id}`);
//     dispatch({ type: "FETCH_USER", payload: response.data });
//   };
// });

// // this also have issue (repetitive network requests)
// export const fetchUser = function (id) {
//   return _.memoize(async function (dispatch) {
//     const response = await jsonPlaceHolder.get(`users/${id}`);
//     dispatch({ type: "FETCH_USER", payload: response.data });
//   });
// };

export const fetchUser = (id) => (dispatch) => _fetchUser(id, dispatch);

const _fetchUser = _.memoize(async (id, dispatch) => {
  const response = await jsonPlaceHolder.get(`users/${id}`);
  dispatch({ type: "FETCH_USER", payload: response.data });
});
