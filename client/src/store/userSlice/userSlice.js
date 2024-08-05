import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
	name: "user",
	initialState: {
		isLogged: false,
		phone: "",
		name: "",
		address: {},
		bonuses: []
	},
	reducers: {
		login: (state, payload) => {
			state.isLogged = true;
			state.phone = payload.payload;
		},
		logout: (state) => {
			state.isLogged = false;
		}
	}
});

export const {
	login, logout
} = userSlice.actions;
export default userSlice.reducer;