export default getInitialPropsCallback => {
	return context => {
		if (context.res) {
			context.res.setHeader('Cache-Control', 's-maxage=60, stale-while-revalidate')
		}

		return getInitialPropsCallback(context)
	}
}
