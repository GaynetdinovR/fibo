const localStorageMiddleware = (store) => (next) => (action) => {
	const result = next(action);

	if (
		[
			"cart/addToCart",
			"cart/removeFromCartById",
			"cart/setProductCountById",
			"cart/clearCart",
			"user/login",
			"user/logout",
			"user/setUserData"
		].includes(action.type)
	) {
		const state = store.getState();
		localStorage.setItem(
			"reduxState",
			JSON.stringify({
				user: state.user,
				cart: state.cart
			})
		);
	}

	return result;
};

export default localStorageMiddleware;
