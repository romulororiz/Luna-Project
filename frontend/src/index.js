import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './style/theme';
import * as theme from './style/theme';
import Routes from './routes';

const root = document.getElementById('root');
ReactDOM.render(
	<ThemeProvider theme={theme}>
		<GlobalStyle />
		<Routes />
	</ThemeProvider>,
	root
);
