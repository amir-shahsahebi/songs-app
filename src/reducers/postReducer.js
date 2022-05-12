export default (state = [], action) => {
  switch (action.type) {
    case "FETCH_POSTS":
      return action.payload;
    default:
      return state;
  }
};

// export default (state = [], action) => {
//   if (action.type === "FETCH_POST") {
//     return action.payload;
//   }
//   return state; //state: all store that we has been created and its important that it can not be undefined so we add "state = []" in order to initialize state at first to an empty array instead of undefined
// };
