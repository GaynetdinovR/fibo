import styles from "../../../styles/components/Banners.module.sass";

const BannerItem = ({ src, alt }) => (
	<div className={styles.banners__banner}>
		<img src={src} alt={alt} loading="eager" decoding="sync" />
	</div>
);

export default BannerItem;
