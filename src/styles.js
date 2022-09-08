import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`

	*,
	*::before,
	*::after {
		box-sizing: border-box;
	}

	html {
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
		font-size: 16px;
	}

	body {
		height: 100vh;
		margin: 0;
		background-color: #F7FBF5;
		font-size: 1rem;
	}
	:root{
		--primary-color: #63846A;
		--secondary-color: #B56E4A;
		--font-color: #FFF2DE;
		--accent-color: #262626;
	}

`;
