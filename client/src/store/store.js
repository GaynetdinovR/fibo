import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice/userSlice.js";
import productsReducer from "./productsSlice/productsSlice.js";
import promosReducer from "./promosSlice/promosSlice.js";
import cartReducer from "./cartSlice/cartSlice.js";
import localStorageMiddleware from "./localStorageMiddleware.js";

const loadFromLocalStorage = () => {
	try {
		const serializedState = localStorage.getItem("reduxState");
		return serializedState ? JSON.parse(serializedState) : undefined;
	} catch (e) {
		console.error("Failed to load state from localStorage", e);
		return undefined;
	}
};

const store = configureStore({
	reducer: {
		user: userReducer,
		products: productsReducer,
		promos: promosReducer,
		cart: cartReducer
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(localStorageMiddleware),
	preloadedState: loadFromLocalStorage()
});

export default store;
