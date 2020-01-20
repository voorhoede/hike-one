export default (req, res) => {
	res.setHeader('Content-Type', 'text/plain; charset=utf-8')
	res
		.status(200)
		.send(`User-agent: *\nDisallow:${req.headers.host === 'preview.hike.one' ? ' /' : ''}`)
}
