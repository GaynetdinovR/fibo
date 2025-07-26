import Product from "./Product.jsx";
import styles from "../../../styles/components/Cart.module.sass";

const Products = ({ cart }) => {
	return (
		<div className={styles.cart__products}>
			{cart?.map((product, i) => (
				<Product key={i} product={product} />
			))}
		</div>
	);
};

export default Products;