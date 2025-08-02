import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice/userSlice.js";
import productsReducer from "./productsSlice/productsSlice.js";
import promosReducer from "./promosSlice/promosSlice.js";
import cartReducer from "./cartSlice/cartSlice.js";
import localStorageMiddleware from "./localStorageMiddleware.js";

const loadFromLocalStorage = () => {
	const serializedState = localStorage.getItem("reduxState");

	if (serializedState === null) return undefined;

	return JSON.parse(serializedState);
};

const preloadedState = loadFromLocalStorage();

const store = configureStore({
	reducer: {
		user: userReducer,
		products: productsReducer,
		promos: promosReducer,
		cart: cartReducer
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(localStorageMiddleware),
	preloadedState
});

export default store;
