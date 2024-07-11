import {useEffect, useState} from "react";

const Home = () => {
    const [state, setState] = useState(null);

	const callBackendAPI = async ()=> {
		const response = await fetch('/products');
		const body = await response.json();

		if(response.status !== 200){
			throw Error(body.message)
		}

		return body;
	}

	useEffect(() => {
		callBackendAPI()
			.then(res => setState(res))
			.catch(err => console.log(err));
	}, []);

    return (
        <main>
		</main>
	)
};
export default Home;