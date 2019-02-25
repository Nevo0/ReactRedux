import { FETCH_POSTS, NEV_POST } from "./types";

export const fetchPosts = () => dispatch => {
  // console.log(dispatch);

  fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(posts =>
      dispatch({
        type: FETCH_POSTS,
        payload: posts
      })
    );
};
