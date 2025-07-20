import styles from "../styles/Ui.module.sass";
import classNames from "classnames";

const NewTag = ({className}) => {
	return (
        <div className={classNames(className, styles.new_tag)}>NEW</div>
    );
};

export default NewTag;