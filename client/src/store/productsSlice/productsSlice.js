import { createSlice } from "@reduxjs/toolkit";

export const productsSlice = createSlice({
	name: "products",
	initialState: [],
	reducers: {
		setProductsFromDB: (state, payload) => {
			return payload.payload;
		}
	}
});

export const { setProductsFromDB } = productsSlice.actions;
export default productsSlice.reducer;