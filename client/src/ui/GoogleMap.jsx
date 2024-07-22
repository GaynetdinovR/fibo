import styles from "../styles/Ui.module.sass";
import classNames from "classnames";

const GoogleMap = ({ className }) => {
	return (
		<iframe
			src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2250.5728539025727!2d37.47757307673972!3d55.66163797305065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNTXCsDM5JzQxLjkiTiAzN8KwMjgnNDguNSJF!5e0!3m2!1sen!2sru!4v1721155631161!5m2!1sen!2sru"
			className={classNames(className, styles.map)}
			allowFullScreen=""
			loading="lazy"
			referrerPolicy="no-referrer-when-downgrade"
		/>
	);
};

export default GoogleMap;
