import PropTypes from 'prop-types';

import BodyQuote from '../body-quote/body-quote';
import CallToAction from '../call-to-action/call-to-action';
import Carousel from '../carousel/carousel';
import Collage from '../collage/collage';
import FiftyFifty from '../50-50/50-50';
import FullWidthImage from '../full-width-image/full-width-image';
import ImageCombo from '../image-combo/image-combo';
import ImageCompositionSmall from '../image-composition-small/image-composition-small';
import ImageGallery from '../image-gallery/image-gallery';
import InlineMedia from '../inline-media/inline-media';
import LogoCarousel from '../logo-carousel/logo-carousel';
import LogoList from '../logo-list/logo-list';
import QuoteBlock from '../quote-block/quote-block';
import RichBodyText from '../rich-body-text/rich-body-text';
import StatisticsBlock from '../statistics-block/statistics-block';
import TeamImage from '../team-image/team-image';
import TextCard from '../text-card/text-card';
import TextCenter from '../text-center/text-center';

const TeamOverview = ({ data = {} }) => (
	<>
		<Collage
			title={data.collage.title}
			text={data.collage.text}
			imageMedium={data.collage.imageBig.url}
			imageSmall={data.collage.imageSmall.url}
		/>

		{data.cta.map((component, index) => {
			return (
				<div key={index} className="team-overview__cta-container">
					<CallToAction
						title={component.title}
						buttonText={component.buttonText}
						url={component.url}
						bgColor={component.bgColor && component.bgColor.hex}
						titleWhite={component.titleWhite}
						fullWidth={component.fullWidth}
						isExternalLink={component.isExternalLink}
					/>
				</div>
			);
		})}

		<ImageCombo>
			<ImageGallery
				title={data.galleryTitle}
				items={[
					{
						title: 'AMS',
						url: data.amsterdamOffice.url,
					},
					{
						title: 'RTM',
						url: data.rotterdamOffice.url,
					},
					{
						title: 'EHV',
						url: data.eindhovenOffice.url,
					},
				]}
			/>
			<StatisticsBlock
				color="blue"
				alignment="colored-block--align-right"
				summary={{
					label: data.statistics.summaryLabel,
					count: data.statistics.summaryCount,
				}}
				groups={[
					{
						label: data.statistics.group1Label,
						count: data.statistics.group1Count,
					},
					{
						label: data.statistics.group2Label,
						count: data.statistics.group2Count,
					},
					{
						label: data.statistics.group3Label,
						count: data.statistics.group3Count,
					},
				]}
				link={{
					target: data.statistics.linkTarget,
					label: data.statistics.linkLabel,
				}}
			/>
		</ImageCombo>

		{data.content.map((component, index) => {
			const hasTextCard = !!(component.textTitle && component.textTitle.length > 1);

			switch (component.itemType) {
				case '40_60_text_right':
					return (
						<FiftyFifty
							key={index}
							title={component.title}
							text={component.text}
							imageLarge={true}
							image={component.image}
						/>
					);
				case '40_60_text_left':
					return (
						<FiftyFifty
							key={index}
							title={component.title}
							contentLeft={true}
							text={component.text}
							imageLarge={true}
							image={component.image}
						/>
					);
				case 'text_center':
					return <TextCenter key={index} title={component.title} text={component.text} />;
				case 'logo_carousel':
					return (
						<LogoCarousel key={index} title={component.title} companies={component.companies} />
					);
				case 'collaboration':
					return (
						<React.Fragment key={index}>
							{(component.title || component.text) && (
								<TextCenter title={component.title} text={component.text} />
							)}
							<LogoList companies={component.companies} />
						</React.Fragment>
					);
				case 'full_width_image':
					return (
						<FullWidthImage
							key={index}
							index={index}
							image={component.image && component.image.url}
							title={component.title}
							subtitle={component.subtitle}
						/>
					);
				case 'collage':
					return (
						<Collage
							key={index}
							title={component.title}
							text={component.text}
							imageMedium={component.imageBig.url}
							imageSmall={component.imageSmall.url}
						/>
					);
				case 'inline_image':
					return <InlineMedia key={index} image={component.image} caption={component.caption} />;
				case 'inline_image_large':
					return (
						<InlineMedia
							key={index}
							large={true}
							image={component.image}
							caption={component.caption}
						/>
					);

				case 'image_combo':
					return (
						<ImageCombo key={index} hasText={hasTextCard}>
							{hasTextCard && <TextCard title={component.textTitle} text={component.textContent} />}

							<FullWidthImage image={component.image && component.image.url} index={index} />

							{component.quoteAuthorTitle && (
								<QuoteBlock
									color={component.quoteColor.color}
									alignment={
										component.quoteAlignLeft
											? 'colored-block--align-left'
											: 'colored-block--align-right'
									}
									quote={component.quote}
									citeName={component.quoteAuthorName}
									citeTitle={component.quoteAuthorTitle}
									citeImage={component.quoteAuthorImage.url}
								/>
							)}
						</ImageCombo>
					);
				case 'video':
					return (
						<InlineMedia
							key={index}
							video={component}
							caption={component.caption}
							large={component.large}
						/>
					);
				case 'call_to_action':
					return (
						<CallToAction
							key={index}
							title={component.title}
							buttonText={component.buttonText}
							url={component.url}
							bgColor={component.bgColor && component.bgColor.hex}
							titleWhite={component.titleWhite}
							fullWidth={component.fullWidth}
							isExternalLink={component.isExternalLink}
						/>
					);
				case 'rich_body_text':
					return (
						<RichBodyText key={index} content={component.content} textCenter={component.centered} />
					);

				case 'body_quote':
					return <BodyQuote key={index} quote={component.quote} quotee={component.quotee} />;

				case 'carousel':
					return <Carousel key={index} slides={component.slides} isWide={component.isWide} />;
			}
		})}

		{data.imageComposition && (
			<ImageCompositionSmall
				image21={data.imageComposition.teamImage21}
				image34={data.imageComposition.teamImage34Large}
				image34Small={data.imageComposition.teamImage34Small}
			/>
		)}

		{data.teamImage916 && (
			<TeamImage title={data.teamImage916.title} image={data.teamImage916.photo.url} />
		)}
	</>
);

TeamOverview.propTypes = {
	data: PropTypes.object,
};

export default TeamOverview;
