import HeaderWrapper from '../components/HeaderWrapper';

export default function Layout({children}) {
	return (
		<>
			<HeaderWrapper />
			<main>{children}</main>
		</>
	);
}
