import { useEffect } from "react";

/**
 * Блокирует скролл по условию
 * @param isLocked
 */
export const useBodyScrollLock = (isLocked) => {
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