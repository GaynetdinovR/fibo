const MenuButton = ({ className, onClick }) => {
	return (
		<button onClick={onClick} className={className}>
			<span></span>
			<span></span>
			<span></span>
			<span></span>
		</button>
	);
};

export default MenuButton;
