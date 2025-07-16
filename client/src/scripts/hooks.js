import { useState } from 'react';

const useFormState = (initialState = { val: '', isErrored: false, isDisabled: false }) => {
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

export { useFormState };