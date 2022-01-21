const Page = () => {};

export async function getServerSideProps({ res }) {
	res.writeHead(301, {
		Location: 'team/careers',
	});
	res.end();

	return {
		props: {},
	};
}

export default Page;
