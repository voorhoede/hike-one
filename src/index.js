import { h, render } from 'preact';
import App from './components/app';

function init() {
	render(<App />, document.body);
}

init();
