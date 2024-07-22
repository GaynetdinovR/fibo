import styles from "../styles/Ui.module.sass";
import RouterLink from "./RouterLink.jsx";
import classNames from "classnames";

const RouterLinkInList = ({ children, liClass, aClass, href, to }) => {
	return (
		<li className={classNames(liClass, styles.link_in_list__item)}>
			<RouterLink className={aClass} href={href} to={to}>
				{children}
			</RouterLink>
		</li>
	);
};

export default RouterLinkInList;
