import styles from "../styles/Ui.module.sass";
import classNames from "classnames";

const DashedLink = ({ children, className, onClickFn }) => {
	return (
		<button onClick={() => onClickFn()} className={classNames(className, styles.dashed_link)}>
			{children}
		</button>
	);
};

export default DashedLink;