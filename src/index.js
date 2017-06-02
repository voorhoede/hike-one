import { h, render } from 'preact';
import App from './components/app';

function init() {
	render(<App />, document.body);
}

// in development, set up Hot Module Reloading:
if (module.hot) {
	require('preact/devtools');   // enable React DevTools
	module.hot.accept('./components/app', () => requestAnimationFrame(init) );
}

init();
