import Header from "../components/Header/Header.jsx";

const Template = ({children}) => {
	return (
		<>
		<Header />
		{children}
		<footer></footer>
		</>
	)
}

export default Template;