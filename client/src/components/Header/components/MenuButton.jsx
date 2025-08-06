const MenuButton = ({ className, onClick }) => {
	return (
		<button aria-label={"Menu Btn"} onClick={onClick} className={className}>
			<span></span>
			<span></span>
			<span></span>
			<span></span>
		</button>
	);
};

export default MenuButton;
