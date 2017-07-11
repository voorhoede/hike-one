import React from 'react';

import Layout from '../components/layout/layout';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';

import ReadMore from '../components/read-more/read-more';
import CaseIntro from '../components/case-intro/case-intro';
import CaseTextCenter from '../components/case-text-center/case-text-center';
import FiftyFifty from '../components/50-50/50-50';
import QuoteBlock from '../components/quote-block/quote-block';
import FullWidthImage from '../components/full-width-image/full-width-image';
import LogoList from '../components/logo-list/logo-list';
import Contact from '../components/contact/contact';

import Data from '../dummy-data/case/case.json';

class Case extends React.Component {
	render() {
		return (
			<Layout title="Hike One - Case">

				<main className="main js-main">
					<Header />
					<article className="article-full-width">
						<CaseIntro
							title={Data.introImageTitle}
							subtitle={Data.introImageSubTitle}
							image={Data.introImage} />

						<CaseTextCenter
                            title={Data.introTextTitle}
                            text={Data.introText} />

						<FiftyFifty className="fifty-fifty-content-left"
							title={Data.fiftyOneTitle}
							text={Data.fiftyOneText}
							image={Data.fiftyOneImage} />

                        <FiftyFifty
							title={Data.fiftyTwoTitle}
							text={Data.fiftyTwoText}
							image={Data.fiftyTwoImage} />

                        <FullWidthImage image={Data.firstFullWidth} />

                        <QuoteBlock
                            color={Data.quoteFirstColor}
                            quote={Data.quoteFirst}
							citeName={Data.quoteFirstCiteName}
                            citeTitle={Data.quoteFirstCiteTitle}
							citeImage={Data.quoteFirstCiteImage}
                        />

                        <FiftyFifty
							title={Data.fiftyThirdTitle}
							text={Data.fiftyThirdText}
							image={Data.fiftyThirdImage} />

                        <FiftyFifty className="fifty-fifty-content-left"
							title={Data.fiftyFourthTitle}
							text={Data.fiftyFourthText}
							image={Data.fiftyFourthImage} />

                        <FullWidthImage image={Data.SecondFullWidth} />

                        <QuoteBlock
                            color={Data.quoteSecondColor}
                            quote={Data.quoteSecond}
							citeName={Data.quoteSecondCiteName}
                            citeTitle={Data.quoteSecondCiteTitle}
							citeImage={Data.quoteSecondCiteImage}
                        />

                        <CaseTextCenter
                            title={Data.introTextSecondTitle}
                            text={Data.introTextSecond} />

						<LogoList logos={Data.logos} />

                        <FullWidthImage
                            image={Data.thirdFullWidth}
                            title={Data.thirdFullWidthTitle}
                            subtitle={Data.thirdFullWidthText} />

                        <Contact
                            title={Data.contactTitle}
                            button={Data.contactButton} />

						<ReadMore
							highlight={Data.readMore.highlight}
							links={Data.readMore.links} />
					</article>
					<Footer />
				</main>
			</Layout>
		);
	}
}

export default Case;
