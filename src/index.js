import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ThemeProvider, CSSReset } from '@chakra-ui/core';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
	<React.StrictMode>
		<ThemeProvider>
			<CSSReset />
			<App />
		</ThemeProvider>
	</React.StrictMode>,
	document.getElementById('root')
);

serviceWorker.unregister();
