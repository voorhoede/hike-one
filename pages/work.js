import Link from 'next/link';
import Layout from '../components/layout/layout';
import MenuBar from '../components/menu-bar/menu-bar';
import Footer from '../components/footer/footer';
import Data from '../data/current/cases/_index.json';

const work = () => (
	<Layout title="Hike One - Case">
		<main className="main js-main">
			<MenuBar />
			<article className="article work">
				<section className="work-intro container">
					<h1 className="work-intro-heading">Our Work</h1>
					<ul className="work-intro-list list-no-style">
						{ Data.cases.map((item, index) => (
							<li key={index}>
								<Link href={`/case?id=${item.id}`} as={`/case/${item.id}`}>
									<a>Case: {item.label}</a>
								</Link>
							</li>
						))}
					</ul>
				</section>

			</article>
			<Footer/>
		</main>
	</Layout>
);

export default work;
