import styles from "../styles/Ui.module.sass";
import { Link, useLocation } from "react-router-dom";
import classNames from "classnames";

const RouterLink = ({ children, className, href, to }) => {
	let routerUrl = href !== undefined ? to + href : to;

	return (
		<Link to={routerUrl} className={classNames(className, styles.link)}>
			{children}
		</Link>
	);
};

export default RouterLink;
