const ADD_ITEM = "add_item";
const REMOVE_ITEM = "remove_item";
const INCREMENT = "increment";

export const addItem = (item) => ({
  type: ADD_ITEM,
  payload: item,
});

export const removeItem = (index) => ({
  type: REMOVE_ITEM,
  payload: index,
});

const initialState = {
  items: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      // return{...state, count: state.count+1}
      return { ...state, items: [...state.items, action.payload] };
    case REMOVE_ITEM:
      return {
        ...state,
        items: state?.items?.filter((_, item) => item !== action.payload),
      };
    default:
      return state;
  }
};
