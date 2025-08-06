import { useState } from "react";

export const usePaymentForm = (initialState) => {
	const [state, setState] = useState(initialState);

	const handleChange = (field, value) => {
		setState(prev => ({
			...prev,
			[field]: value
		}));
	};

	return [state, handleChange];
};