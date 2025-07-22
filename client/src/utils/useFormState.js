import { useState } from "react";

/**
 * Объединение всех свойств для формы
 * @param initialState
 * @returns {unknown[]}
 */
export const useFormState = (initialState = { val: '', isErrored: false, isDisabled: false }) => {
	const [value, setValue] = useState(initialState.value);
	const [isErrored, setIsErrored] = useState(initialState.isErrored);
	const [isDisabled, setIsDisabled] = useState(initialState.isDisabled);

	return [
		value,
		setValue,
		isDisabled,
		setIsDisabled,
		isErrored,
		setIsErrored
	];
};