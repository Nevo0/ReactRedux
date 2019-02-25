import { FETCH_POSTS, NEV_POST } from "../actions/types";

const inirialState = {
  items: [],
  item: {}
};

export default function(state = inirialState, action) {
  switch (action.type) {
    case FETCH_POSTS:
      // console.log(state);
      // console.log(action);
      // console.log(inirialState);

      return {
        ...state,
        items: action.payload
      };
    default:
      return state;
  }
}
