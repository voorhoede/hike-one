import "isomorphic-fetch";
import Layout from '../components/layout/layout';
import MenuBar from '../components/menu-bar/menu-bar';
import Footer from '../components/footer/footer';
import PageHeader from '../components/page-header/page-header';
import UpdateOverview from '../components/update-overview/update-overview';
import cookie from '../components/_helpers/cookie';
import getData from "../lib/get-data";

const updates = ({Data, updatesData, fontsLoaded, fullUrl}) => {
  return (
    <Layout title="Hike One - Updates"
        fontsLoaded={fontsLoaded}
        seo={Data.seo}
        url={fullUrl} >
      <main className="main js-main">
        <MenuBar color="white" />
        <article className="article">
          <PageHeader
            isSmall={true}
            title={Data.header.title}
            subtitle={Data.header.subtitle}
            image={Data.header.backgroundImage.url}/>
          <div className={`page-scrolling-content-small`}>
            <UpdateOverview data={Data} updatesData={updatesData} />
          </div>
        </article>
        <Footer
          callToActionLabel={Data.footer.callToActionLabel}
          callToActionUrl={Data.footer.callToActionUrl} />
      </main>
    </Layout>
  );
};

updates.getInitialProps = async ({req, res, asPath}) => {
  const baseUrl = req ? `${req.protocol}://${req.get('Host')}` : '';
  const fullUrl = `${baseUrl}${asPath}`;
  const fetchJson = (model) => getData(baseUrl, model, res)
  const fetchAll = (models) => Promise.all(models.map(fetchJson));
  const [ Data, updatesData ] = await fetchAll(['update-overview', 'update-extracts']);
  updatesData.sort((a, b) => { return new Date(b.date).getTime() - new Date(a.date).getTime(); });
  const fontsLoaded = req ? req.cookies['fonts-loaded'] : cookie('fonts-loaded');
  return { Data, updatesData, fontsLoaded, fullUrl };
};

export default updates;
