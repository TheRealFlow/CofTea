import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
/* abril-fatface-regular - latin */
@font-face {
  font-family: 'Abril Fatface';
  font-style: normal;
  font-weight: 400;
  src: url('../fonts/abril-fatface-v19-latin-regular.eot'); /* IE9 Compat Modes */
  src: local(''),
       url('../fonts/abril-fatface-v19-latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('../fonts/abril-fatface-v19-latin-regular.woff2') format('woff2'), /* Super Modern Browsers */
       url('../fonts/abril-fatface-v19-latin-regular.woff') format('woff'), /* Modern Browsers */
       url('../fonts/abril-fatface-v19-latin-regular.ttf') format('truetype'), /* Safari, Android, iOS */
       url('../fonts/abril-fatface-v19-latin-regular.svg#AbrilFatface') format('svg'); /* Legacy iOS */
}
	*,
	*::before,
	*::after {
		box-sizing: border-box;
	}

	html {
		font-size: 16px;
	}

	body {
		margin: 0;
		background-image: url('./../background-image.jpg');
		background-size: cover;
		font-size: 1rem;
	}
	:root{
		--primary-color: #63846A;
		--secondary-color: #B56E4A;
		--accent-color: #FFF2DE;
		--background-color: #422519;
	}

`;
