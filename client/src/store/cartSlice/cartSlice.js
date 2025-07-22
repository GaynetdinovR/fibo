import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
	name: "cart",
	initialState: [],
	reducers: {
		addToCart: (state, { payload }) => {
			state.push({ ...payload, count: 1 });
		},
		removeFromCartById: (state, { payload: id }) => {
			return state.filter((item) => item.id !== id);
		},
		setProductCountById: (state, { payload: { id, count } }) => {
			const item = state.find((item) => item.id === id);
			if (item) item.count = count;
		},
		clearCart: () => {
			return [];
		}
	}
});

export const { addToCart, clearCart, removeFromCartById, setProductCountById } =
	cartSlice.actions;
export default cartSlice.reducer;
