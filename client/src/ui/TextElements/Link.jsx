import styles from "../../styles/Ui.module.sass";
import classNames from "classnames";

const Link = ({
	children,
	className,
	href,
	ariaLabel = "",
	openInNewTab = false,
	...restProps
}) => {
	const ariaLabelValue =
		ariaLabel || (typeof children === "string" ? children : "");

	const linkProps = {
		href,
		className: classNames(styles.link, className),
		"aria-label": ariaLabelValue,
		...(openInNewTab && {
			target: "_blank",
			rel: "noopener noreferrer"
		}),
		...restProps
	};

	return <a {...linkProps}>{children}</a>;
};

export default Link;
