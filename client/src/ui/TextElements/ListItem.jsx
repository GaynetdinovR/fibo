import styles from "../../styles/Ui.module.sass";
import classNames from "classnames";

const ListItem = ({ liClass, children }) => {
	return (
		<li className={classNames(liClass, styles.link_in_list__item)}>
			{children}
		</li>
	);
};

export default ListItem;