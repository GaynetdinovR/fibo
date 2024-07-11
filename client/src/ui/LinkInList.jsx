import styles from "../styles/Ui.module.sass";
import classNames from "classnames";

const LinkInList = ({ children, liClass, aClass }) => {
	return (
		<li className={classNames(liClass, styles.link_in_list__item)}>
			<a className={classNames(aClass, styles.link_in_list__link)}>
				{children}
			</a>
		</li>
	);
};

export default LinkInList;