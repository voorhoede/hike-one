import fetch from 'isomorphic-unfetch';

const fetchContent = ({ graphqlQuery, preview = false }) => {
	return fetch(`https://graphql.datocms.com/${preview ? 'preview' : ''}`, {
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

			return { ...response.data, preview };
		});
};

export default fetchContent;
