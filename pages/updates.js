import Layout from '../components/layout/layout';
import MenuBar from '../components/menu-bar/menu-bar';
import Footer from '../components/footer/footer';
import UpdatesHeader from '../components/updates-header/updates-header';
import * as UpdatesHeaderShapes from '../components/updates-header/updates-header-shapes';
import data from '../data/current/update.json';
import MockImageData from '../data/current/home.json';
import UpdateExtractSmall from '../components/update-extract-small/update-extract-small';
import UpdateOverview from '../components/update-overview/update-overview';

const updateData = [
	{
		title :"yo" ,
		date :"2017-07-07", 
		name :"Nick Hogedoorn", 
		color: '#fe595b',
		target: '#',
		extractImage : MockImageData.caseExtract.image.url
	},
	{
		title :"yo" ,
		date :"2017-07-07", 
		name :"Nick Hogedoorn", 
		color: '#00aae9',
		target: '#',
		extractImage : MockImageData.caseExtract.image.url
	},
	{
		title :"yo" ,
		date :"2017-07-07", 
		name :"Nick Hogedoorn", 
		color: '#ffe044',
		target: '#',
		extractImage : MockImageData.caseExtract.image.url
	},{
		title :"yo" ,
		date :"2017-07-07", 
		name :"Nick Hogedoorn", 
		color: '#45d33c',
		target: '#',
		extractImage : MockImageData.caseExtract.image.url
	},{
		title :"yo" ,
		date :"2017-07-07", 
		name :"Nick Hogedoorn", 
		color: '#E45052',
		target: '#',
		extractImage : MockImageData.caseExtract.image.url
	},{
		title :"yo" ,
		date :"2017-07-07", 
		name :"Nick Hogedoorn",
		color: '#8314bb',
		target: 'https://github.com/voorhoede/hike-one/pull/126',
		extractImage : MockImageData.caseExtract.image.url
	}
]

const updates = () => {
	const scrollToTargetClass = 'js-scroll-to-target';

	return (
		<Layout title="Hike One - Updates">
			<main className="main js-main">
				<MenuBar />
				<article className="article">
					<UpdatesHeader 
						title={data.updatePageTitle}>
						<UpdatesHeaderShapes.variation2Front position="front"/>
						<UpdatesHeaderShapes.variation1Back position="back"/>
					</UpdatesHeader>
					<UpdateOverview>
						{ 
							updateData.map((item, index) => (
								<UpdateExtractSmall key={index} {...item} />
							))
						}
					</UpdateOverview>
				</article>
				<Footer />
			</main>
		</Layout>
	);
};

export default updates;
