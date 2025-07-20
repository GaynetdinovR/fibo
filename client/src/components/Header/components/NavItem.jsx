import { Link, useLocation } from "react-router-dom";
import LinkInList from "../../../ui/LinkInList.jsx";
import RouterLinkInList from "../../../ui/RouterLinkInList.jsx";

const NavItem = ({ to, href, children, liClass, aClass }) => {
	const location = useLocation();
	const isCurrentPage = location.pathname === to;

	if (isCurrentPage) {
		return (
			<LinkInList liClass={liClass} href={href} className={aClass}>
				{children}
			</LinkInList>
		);
	}

	return (
		<RouterLinkInList liClass={liClass} to={to} className={aClass}>
			{children}
		</RouterLinkInList>
	);
};

export default NavItem;