import { useLocation } from "react-router-dom";
import ListItem from "../../../ui/TextElements/ListItem.jsx";
import Link from "../../../ui/TextElements/Link.jsx";
import RouterLink from "../../../ui/TextElements/RouterLink.jsx";

const NavItem = ({ to, href, children, liClass, aClass }) => {
	const location = useLocation();
	const isCurrentPage = location.pathname === to;

	if (isCurrentPage) {
		return (
			<ListItem liClass={liClass}>
				<Link href={href} className={aClass}>
					{children}
				</Link>
			</ListItem>
		);
	}

	return (
		<ListItem liClass={liClass}>
			<RouterLink to={to} className={aClass}>
				{children}
			</RouterLink>
		</ListItem>
	);
};

export default NavItem;