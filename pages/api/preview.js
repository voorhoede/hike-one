export default (req, res) => {
	if (req.query.secret !== process.env.DATOCMS_PREVIEW_SECRET) {
		return res.status(401).json({ message: 'Invalid token' });
	}

	res.setPreviewData({});
	res.redirect('/');
};
