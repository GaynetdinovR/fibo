import { createSlice } from "@reduxjs/toolkit";

const initialUserState = {
	id: 0,
	isLogged: false,
	phone: "",
	name: "",
	address: {
		address: "",
		entrance: "",
		floor: "",
		intercome_code: "",
		apartment: ""
	},
	bonuses: []
};

export const userSlice = createSlice({
	name: "user",
	initialState: initialUserState,
	reducers: {
		login: (state, { payload }) => ({
			id: payload.id,
			isLogged: true,
			phone: payload.phone,
			name: payload.name || "",
			address:
				typeof payload.address === "string"
					? JSON.parse(payload.address)
					: payload.address || { ...initialUserState.address },
			bonuses: payload.bonuses || []
		}),

		logout: () => initialUserState,

		setPhone: (state, { payload }) => {
			state.phone = payload;
		},

		setName: (state, { payload }) => {
			state.name = payload;
		},

		setAddress: (state, { payload }) => {
			state.address =
				typeof payload === "string" ? JSON.parse(payload) : payload;
		},

		setUserData: (state, { payload }) => {
			const data = Array.isArray(payload) ? payload[0] : payload;

			state.name = data.name;
			state.address =
				typeof data.address === "string"
					? JSON.parse(data.address)
					: data.address;
			state.bonuses = data.bonuses || [];
		}
	}
});

export const { login, logout, setUserData, setName, setPhone, setAddress } =
	userSlice.actions;

export default userSlice.reducer;
