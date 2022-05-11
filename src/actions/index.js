import jsonPlaceHolder from "../apis/jsonPlaceHolder";

export const fetchPost = async () => {
  // Bad approach
  const response = await jsonPlaceHolder.get("/posts");
  return {
    type: "FETCH_POST",
    payload: response,
  };
};
