import React from 'react';
import Link from 'next/link'

import Layout from '../components/layout/layout';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';

import ReadMoreBlock from '../components/read-more-block/read-more-block';

class Case extends React.Component {
	render() {
        const readMoreBlockImageBlock = {
            image: "static/images/img-vbh.jpg",
            title: "VBH Pivot App",
            buttonValue: "View case",
            buttonTarget: "#"
        };
        const readMoreBlockButtons = [
            {
                link: "#",
                title: "Your  first Design Sprint: do these 3 things frist",
                subtext: "24 November 2016 | Matthijs Collard & Martijn Pillich"
            },
            {
                link: "#",
                title: "In 5 days from sketch to tested prototype with Design Sprints",
                subtext: "17 November 2016 | Ingmar Coenen"
            }
        ];

		return (
			<Layout title="Hike One - Case">
				<main className="main js-main">
					<Header />
					<article className="article-full-width">
						<ReadMoreBlock
                            imageBlock={readMoreBlockImageBlock}
                            buttons={readMoreBlockButtons} />
					</article>
					<Footer />
				</main>
			</Layout>
		);
	}
}

export default Case;
