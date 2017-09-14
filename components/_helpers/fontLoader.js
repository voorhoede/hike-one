const FontFaceObserver = require('fontfaceobserver');
import cookie from '../_helpers/cookie';

const loadFonts = () => {
	if (window.Promise) {
		const gilroyExtraBold = new FontFaceObserver('gilroy', {weight: 900});
		const gilroyBold = new FontFaceObserver('gilroy', {weight: 700});
		const gilroyBoldItalic = new FontFaceObserver('gilroy', {weight: 700, style: 'italic'});
		const gilroySemiBold = new FontFaceObserver('gilroy', {weight: 600});
		const gilroyMedium = new FontFaceObserver('gilroy', {weight: 500});
		const gilroyMediumItalic = new FontFaceObserver('gilroy', {weight: 500, style: 'italic'});
		const gilroyRegular = new FontFaceObserver('gilroy', {weight: 400});
		const playFairRegular = new FontFaceObserver('playfair', {weight: 'normal'});

		return new Promise((resolve, reject) => {
			Promise.all([
				gilroyExtraBold.load(),
				gilroyBold.load(),
				gilroyBoldItalic.load(),
				gilroySemiBold.load(),
				gilroyMedium.load(),
				gilroyMediumItalic.load(),
				gilroyRegular.load(),
				playFairRegular.load()
			])
			.then(() => {
					cookie('fonts-loaded', true, 100);
					return resolve();
				},
				(err) => console.log('Error while observing font', err)
			);
		});

	}
};

export default loadFonts;

