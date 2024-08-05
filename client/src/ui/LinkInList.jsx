import styles from "../styles/Ui.module.sass";
import classNames from "classnames";
import LinkUI from "./LinkUI.jsx";

const LinkInList = ({ children, liClass, aClass, href }) => {
	return (
		<li className={classNames(liClass, styles.link_in_list__item)}>
			<LinkUI className={aClass} href={href}>
				{children}
			</LinkUI>
		</li>
	);
};

export default LinkInList;