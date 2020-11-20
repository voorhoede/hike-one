const withCacheControl = (requestHandler) => {
	return (context) => {
		if (context.res && !context.preview) {
			context.res.setHeader('Cache-Control', 's-maxage=600, stale-while-revalidate');
		}

		return requestHandler(context);
	};
};

export default withCacheControl;
