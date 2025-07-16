import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
	name: "user",
	initialState: {
		isLogged: false,
		phone: "",
		name: "",
		addressData: {
			address: "",
			entrance: "",
			floor: "",
			intercome_code: "",
			apartment: ""
		},
		bonuses: []
	},
	reducers: {
		login: (state, payload) => {
			state.isLogged = true;
			state.phone = payload.payload;
		},
		logout: () => {
			return {
				isLogged: false,
				phone: "",
				name: "",
				address: {},
				bonuses: []
			};
		},
		setPhone: (state, payload) => {
			state.phone = payload.payload;
		},
		setName: (state, payload) => {
			state.name = payload.payload;
		},
		setAddressData: (state, payload) => {
			state.addressData = payload.payload;
		},
		setUserData: (state, payload) => {
			payload = payload.payload[0];

			state.name = payload.name;
			state.address = payload.address;
			state.bonuses = payload.bonuses;
		}
	}
});

export const { login, logout, setUserData, setName, setPhone, setAddressData } =
	userSlice.actions;

export default userSlice.reducer;
