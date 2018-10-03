const backoff = require('backoff');
const defaults = {
	attempts: 10,
	initialDelay: 250,
	maxDelay: 3e4,
	action: 'action'
}
/*
Retry an action n times. Takes a promise returning function with the action
and an options object. Will resolve if the action is eventually successful and
reject if the action fails to complete successfully within the alloted amount
of retry attempts.
*/
module.exports = (fn, options = {}) => {
	const { attempts, initialDelay, maxDelay, action } = { ...defaults, ...options }
	const fibonacciBackoff = backoff.fibonacci({ initialDelay, maxDelay })

	fibonacciBackoff.failAfter(attempts);

	fibonacciBackoff.on('backoff', function(number, delay) {
		console.warn(`(Re)try ${action} after ${delay} ms. Attempt ${number}.`)
	});

	return new Promise((resolve, reject) => {
		fibonacciBackoff.on('ready', () => {
			fn()
				.then(() => {
					fibonacciBackoff.reset()
					resolve()
				})
				.catch(() => fibonacciBackoff.backoff())
		});

		fibonacciBackoff.on('fail', () => reject());

		fibonacciBackoff.backoff()
	})
}
