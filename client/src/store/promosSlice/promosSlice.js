import { createSlice } from "@reduxjs/toolkit";

export const promosSlice = createSlice({
	name: "promos",
	initialState: [],
	reducers: {
		setPromosFromDB: (state, payload) => {
			return payload.payload;
		}
	}
});

export const { setPromosFromDB } = promosSlice.actions;
export default promosSlice.reducer;