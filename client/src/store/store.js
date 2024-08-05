import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice/userSlice.js";
import productsReducer from "./productsSlice/productsSlice.js";

const store = configureStore({
	reducer: {
		user: userReducer,
		products: productsReducer
	}
});

export default store;
