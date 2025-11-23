import React, { useEffect, useReducer } from "react";
import axios from "axios";

const initialValue = {
  isLoading: true,
  post: "",
  error: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "DATA_FETCH_SUCCESS":
      return {
        isLoading: false,
        post: action.post.title,
        error: "",
      };
    case "DATA_FETCH_ERROR":
      return {
        isLoading: false,
        post: null,
        error: "Oops..........soemthing went wrong",
      };
    default:
      return state;
  }
};

export default function UseReducerDataFetch() {
  const [state, dispatch] = useReducer(reducer, initialValue);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/2")
      .then((res) => {
        return dispatch({ type: "DATA_FETCH_SUCCESS", post: res.data });
      })
      .catch((error) => {
        console.log(`error occurred` + error.message);
        return dispatch({ type: "DATA_FETCH_ERROR" });
      });
  }, []);

  return (
    <div>
      <br />

      <h1>Fetching Data using useReducer hook!</h1>
      {state.isLoading ? "data is loading............ " : state.post}
      {state.error ? state.error : null}
      <br />
    </div>
  );
}
