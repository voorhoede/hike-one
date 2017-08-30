import Layout from '../components/layout/layout';
import MenuBar from '../components/menu-bar/menu-bar';
import Footer from '../components/footer/footer';
import PageHeaderSmall from '../components/page-header-small/page-header-small';
import * as PageHeaderSmallShapes from '../components/page-header-small/page-header-small-shapes';
import data from '../data/current/update-overview.json';
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
		target: 'https://unitid.nl',
		extractImage : MockImageData.caseExtract.image.url
	}
]

const updates = () => {
	return (
		<Layout title="Hike One - Updates">
			<main className="main js-main">
				<MenuBar />
				<article className="article">
					<PageHeaderSmall
						title={data.title}>
						<PageHeaderSmallShapes.variation2Front position="front"/>
						<PageHeaderSmallShapes.variation1Back position="back"/>
					</PageHeaderSmall>
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
