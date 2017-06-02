import { h, render } from 'preact';
import App from './components/app';
import './styles';

function init() {
	render(<App />, document.body);
}

if (process.env.NODE_ENV === 'development') {
	require('preact/devtools');   // enable React DevTools
}

init();
