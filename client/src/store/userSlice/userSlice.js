import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
	name: "user",
	initialState: {
		isLogged: true,
		phone: "89603954622",
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
			return {
				isLogged: false,
				phone: "",
				name: "",
				address: {},
				bonuses: []
			};
		},
		setUserData: (state, { payload }) => {
			state.name = payload.name;
			state.address = payload.address;
			state.bonuses = payload.bonuses;
		}
	}
});

export const { login, logout, setUserData } = userSlice.actions;
export default userSlice.reducer;