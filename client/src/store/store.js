import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice/userSlice.js";
import productsReducer from "./productsSlice/productsSlice.js";
import promosReducer from "./promosSlice/promosSlice.js";
import cartReducer from "./cartSlice/cartSlice.js";

const store = configureStore({
	reducer: {
		user: userReducer,
		products: productsReducer,
		promos: promosReducer,
		cart: cartReducer
	}
});

export default store;
