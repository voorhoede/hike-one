export async function getServerSideProps({ res }) {
	res.writeHead(301, {
		Location: 'team/culture',
	});
	res.end();

	return {
		props: {},
	};
}

export default () => {};
