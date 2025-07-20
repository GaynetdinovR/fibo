import { useEffect, useState } from "react";

/**
 * Объединение всех свойств для формы
 * @param initialState
 * @returns {unknown[]}
 */
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

/**
 * Блокирует скролл по условию
 * @param isLocked
 */
const useBodyScrollLock = (isLocked) => {
	useEffect(() => {
		if (typeof document === 'undefined') return;

		const originalStyle = window.getComputedStyle(document.body).overflowY;

		if (isLocked) {
			document.body.style.overflowY = "hidden";
		} else {
			document.body.style.overflowY = originalStyle;
		}

		return () => {
			document.body.style.overflowY = originalStyle;
		};
	}, [isLocked]);
};

export { useFormState, useBodyScrollLock };