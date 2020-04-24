const Page = () => (
	<></>
)

Page.getInitialProps = ({ res }) => {
	if (res) {
		res.writeHead(301, {
			Location: 'team/culture'
		});
		res.end();
	}

	return {}
};

export default Page;
