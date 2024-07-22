import styles from "../styles/Ui.module.sass";
import classNames from "classnames";
import Link from "./Link.jsx";

const LinkInList = ({ children, liClass, aClass, href }) => {
	return (
		<li className={classNames(liClass, styles.link_in_list__item)}>
			<Link className={aClass} href={href}>
				{children}
			</Link>
		</li>
	);
};

export default LinkInList;