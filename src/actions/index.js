import _ from "lodash"; // this is a lodash library
import jsonPlaceHolder from "../apis/jsonPlaceHolder";

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  // "getState" is second argument that give we access to all data that is in store
  await dispatch(fetchPosts()); // we cannot call "fetchPosts" directly and we must call it in dispatch and also we need "await" because it takes time to response
  const userIds = _.uniq(_.map(getState().posts, "userId")); // this method, find uniq "userId" and return and array of them, // "userId" is uniq in posts
  userIds.forEach((id) => dispatch(fetchUser(id))); //we dont need "await" because after that we dont use anything that needed to fetchUser

  // also we can use this method
  // _.chain(getState().posts)
  //   .map("userId")
  //   .uniq()
  //   .forEach((id) => dispatch(fetchUser(id)))
  //   .value(); //we use value() gor executing
};

//   // simple form of function (action creator)
// export const fetchUser = function (id) {
//   return async function (dispatch) {
//     const response = await jsonPlaceHolder.get(`users/${id}`);
//     dispatch({ type: "FETCH_USER", payload: response.data });
//   };
// };

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

// // with this method also we have same issue (repetitive network requests)
// export const fetchUser = function (id) {
//   return _.memoize(async function (dispatch) {
//     const response = await jsonPlaceHolder.get(`users/${id}`);
//     dispatch({ type: "FETCH_USER", payload: response.data });
//   });
// };

// // this method works well but its a little complicated
// export const fetchUser = (id) => (dispatch) => _fetchUser(id, dispatch);

// const _fetchUser = _.memoize(async (id, dispatch) => {
//   const response = await jsonPlaceHolder.get(`users/${id}`);
//   dispatch({ type: "FETCH_USER", payload: response.data });
// });

export const fetchUser = (id) => async (dispatch) => {
  const response = await jsonPlaceHolder.get(`users/${id}`);
  dispatch({ type: "FETCH_USER", payload: response.data });
};
