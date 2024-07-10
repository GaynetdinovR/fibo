import Header from "../components/Header/Header.jsx";
import Footer from "../components/Footer/Footer.jsx";

const Template = ({children}) => {
	return (
		<>
		<Header />
		{children}
		<Footer/>
		</>
	)
}

export default Template;