import { Component } from 'react'
import Head from 'next/head'

class HomerunWidget extends Component {
	render() {
		return (
			<>
				<Head>
					<script src="https://d3s4clg74dg0wr.cloudfront.net/widget/js/main.js?v=3.11.1" defer />
				</Head>
				<div id="homerun-jobs-widget"></div>
			</>
		)
	}
	componentDidMount() {
		// Check if the Homerun object, provided by the injected script, is loaded.
		const maxRetries = 10
		let retries = 0
		const id = setInterval(() => {
			retries++
			if (retries > maxRetries) {
				return clearInterval(id)
			}
			if (window.Homerun && typeof window.Homerun.loadWidget === 'function') {
				try {
					window.Homerun.loadWidget('ahz3le8c0dl4ivfruo0n')
				} catch (e) {
					return console.error(e.message)
				}
				return clearInterval(id)
			}
		}, 500)
	}
}

export default HomerunWidget;
