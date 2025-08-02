import { createContext, useState } from "react";

export const MenuContext = createContext();

const MenuProvider = ({ children }) => {
	const [isCartOpen, setCart] = useState(false);

	return (
		<MenuContext.Provider
			value={{
				isCartOpen,
				setCart
			}}
		>
			{children}
		</MenuContext.Provider>
	);
};

export default MenuProvider;