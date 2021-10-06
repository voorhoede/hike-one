const { useState, useEffect } = require('react');

const Layout = ({ preview, children }) => {
	const [acceptedCookie, setAcceptedCookie] = useLocalStorage('accepted-cookies', false);

	return (
		<>
			<aside
				className={`layout__cookie-notice ${
					acceptedCookie ? 'layout__cookie-notice--accepted' : ''
				}`}
			>
				<span>
					We use some cookies, just for us to understand how you use our website. You can read all
					about it in our&nbsp;
					<a className="layout__cookie-link" href="/topic/cookie-policy">
						Cookie Policy
					</a>
					.
				</span>
				<button
					className="layout__cookie-button btn-clear btn-secondary"
					onClick={() => setAcceptedCookie(true)}
				>
					OK
				</button>
			</aside>
			{preview && (
				<aside className="layout__preview-notice">
					This page is a preview.&nbsp;
					<a className="layout__preview-notice-link" href="/api/exit-preview">
						Exit preview mode.
					</a>
				</aside>
			)}
			{children}
		</>
	);
};

function useLocalStorage(key, initialValue) {
	// Pass initial state function to useState so logic is only executed once
	const [storedValue, setStoredValue] = useState(initialValue);

	const setValue = (value) => {
		try {
			// Allow value to be a function so we have same API as useState
			const valueToStore = value instanceof Function ? value(storedValue) : value;

			setStoredValue(valueToStore);
			window.localStorage.setItem(key, JSON.stringify(valueToStore));
		} catch (error) {
			console.error(error);
		}
	};

	useEffect(() => {
		try {
			const item = window.localStorage.getItem(key);
			setStoredValue(item ? JSON.parse(item) : initialValue);
		} catch (error) {
			console.error(error);
			return initialValue;
		}
	});

	return [storedValue, setValue];
}

export default Layout;
