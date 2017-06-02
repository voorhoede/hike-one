import { h, Component } from 'preact';
import { Router } from 'preact-router';

import Home from '../views/home/home';
import Case from '../views/case/case';

export default class App extends Component {

	render() {
		return (
			<Router>
				<Home path="/" />
				<Case path="/case"/>
			</Router>
		);
	}
}
