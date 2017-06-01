import { h, Component } from 'preact';
import Header from './header/header';

export default class App extends Component {

	render() {
		return (
			<div id="app">
				<Header />
				<h2>hello world</h2>
			</div>
		);
	}
}
