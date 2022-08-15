//import {nanoid} from 'nanoid';
import Head from 'next/head';

import ProductList from '../components/ProductList';
//import {useState} from 'react';

// import useFetch from '../hooks/useFetch';
// import useStore from '../hooks/useStore';

export default function HomePage() {
	// // Data
	// const {data, loading, error} = useFetch('/api/hello');

	// // Local state
	// const [id, setId] = useState(null);

	// // Global state
	// const counter = useStore(state => state.counter);
	// const decrementCounter = useStore(state => state.decrementCounter);
	// const incrementCounter = useStore(state => state.incrementCounter);
	// const setCounter = useStore(state => state.setCounter);

	return (
		<>
			<Head>
				<title key="title">CoffTea</title>
				<meta key="description" name="description" content="This is our capstone-project" />
			</Head>
			<ProductList />
		</>
	);
}
