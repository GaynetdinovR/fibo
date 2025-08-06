const TARGET_ACTIONS = [
	"cart/addToCart",
	"cart/removeFromCartById",
	"cart/setProductCountById",
	"cart/clearCart",
	"user/login",
	"user/logout",
	"user/setUserData",
	"user/setPhone",
	"user/setName",
	"user/setAddress"
];

const localStorageMiddleware = (store) => (next) => (action) => {
	const result = next(action);

	if (TARGET_ACTIONS.includes(action.type)) {
		const state = store.getState();
		try {
			localStorage.setItem(
				"reduxState",
				JSON.stringify({
					user: state.user,
					cart: state.cart
				})
			);
		} catch (e) {
			console.error("Failed to save state to localStorage", e);
		}
	}

	return result;
};

export default localStorageMiddleware;
