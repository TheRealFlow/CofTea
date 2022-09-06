import Head from 'next/head';

import FilterBar from '../components/FilterBar';
import Layout from '../components/Layout';
import ProductList from '../components/ProductList';

export default function HomePage() {
	return (
		<Layout>
			<Head>
				<title key="title">CoffTea</title>
				<meta key="description" name="description" content="This is our capstone-project" />
			</Head>
			<FilterBar />
			<ProductList />
		</Layout>
	);
}
