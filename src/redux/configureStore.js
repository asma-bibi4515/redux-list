import { configureStore } from "@reduxjs/toolkit";
import cartItemReducer from "./ducks/cartitems";

const store = configureStore({
  reducer: {
    cart: cartItemReducer,
  },
});

export default store;
