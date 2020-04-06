import fetch from 'isomorphic-unfetch';

module.exports = ({ graphqlQuery, req }) => {
	const usePreview =
		(req && req.headers.host === 'preview.hike.one') ||
		(process.browser && window.location.host === 'preview.hike.one');

	return fetch(`https://graphql.datocms.com/${usePreview ? 'preview' : ''}`, {
		method: 'post',
		headers: {
			'Content-Type': 'application/json',
			Authorization: 'f7b3b3a52a94a0a7f963219d430661',
		},
		body: JSON.stringify({
			query: graphqlQuery,
		}),
	})
		.then((response) => response.json())
		.then((response) => {
			if (response.errors) throw Error(JSON.stringify(response, null, 4));

			return response.data;
		});
};
