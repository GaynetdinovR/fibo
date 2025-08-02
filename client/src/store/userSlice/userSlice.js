import { createSlice } from "@reduxjs/toolkit";

const initialUserState = {
	isLogged: false,
	phone: "",
	name: "",
	address: {
		address: "",
		entrance: "",
		floor: "",
		intercom_code: "",
		apartment: ""
	},
	bonuses: []
};

export const userSlice = createSlice({
	name: "user",
	initialState: initialUserState,
	reducers: {
		login: (state, action) => {
			const payload = action.payload;

			return {
				isLogged: true,
				phone: payload.phone,
				name: payload.name || "",
				address: JSON.parse(payload.address) || {
					address: "",
					entrance: "",
					floor: "",
					intercome_code: "",
					apartment: ""
				},
				bonuses: payload.bonuses || []
			};
		},
		logout: () => {
			return initialUserState;
		},
		setPhone: (state, payload) => {
			state.phone = payload.payload;
		},
		setName: (state, payload) => {
			state.name = payload.payload;
		},
		setAddress: (state, payload) => {
			state.address = JSON.parse(payload.address);
		},
		setUserData: (state, payload) => {
			payload = payload.payload[0];

			state.name = payload.name;
			state.address = JSON.parse(payload.address);
			state.bonuses = payload.bonuses;
		}
	}
});

export const { login, logout, setUserData, setName, setPhone, setAddress } =
	userSlice.actions;

export default userSlice.reducer;
