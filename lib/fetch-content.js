import fetch from 'isomorphic-unfetch';

module.exports = query =>
	fetch('https://graphql.datocms.com/', {
		method: 'post',
		headers: {
			'Content-Type': 'application/json',
			Authorization: 'f7b3b3a52a94a0a7f963219d430661',
		},
		body: JSON.stringify({
			query,
		}),
	})
		.then(response => response.json())
		.then(response => {
			if (response.errors) throw Error(JSON.stringify(response, null, 4));

			return response.data;
		});
