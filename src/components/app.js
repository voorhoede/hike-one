import { h, Component } from 'preact';
import { Router } from 'preact-router';

import Home from '../views/home/home';
import Case from '../views/case/case';
import Services from '../views/services/services';

export default class App extends Component {

	render() {
		return (
			<Router>
				<Home path="/" />
				<Case path="/case"/>
				<Services path="/services"/>
			</Router>
		);
	}
}
