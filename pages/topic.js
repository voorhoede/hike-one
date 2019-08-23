import React from 'react'
import PropTypes from 'prop-types'
import 'isomorphic-fetch'
import getData from '../lib/get-data'
import cookie from '../components/_helpers/cookie'
import {
  BodyQuote,
  CallToAction,
  CaseExtractSmall,
  Contact,
  ContactShapes,
  FiftyFifty,
  Footer,
  FullWidthHeader,
  FullWidthImageSmall,
  InlineMedia,
  Layout,
  LogoCarousel,
  MailchimpForm,
  MenuBar,
  RichBodyText,
  SocialShare,
  TextCenter,
  UpdateExtractSmall,
  UpdateOverviewSmall,
  WorkOverview,
} from '../components'

const Topic = ({ data = {}, footer = {}, fontsLoaded = '', fullUrl = '' }) => (
  <Layout
    canonicalUrl={data.canonical}
    title={`Hike One - ${data.title}`}
    fontsLoaded={fontsLoaded}
    seo={data.seo}
    url={fullUrl}>
    <main className="main js-main">

      <MenuBar color="white" />

      <article className="article">
        <FullWidthHeader
          headerImage={data.headerImage.url}
          headerImageLarger={data.headerImageLarger}
          color={data.color.hex}
          title={data.title}
          titleOnly={true}
        />

        {data.content.map((component, index) => {
          switch (component.itemType) {
            case 'rich_body_text':
              return (
                <RichBodyText
                  key={index}
                  content={component.content}
                  textCenter={component.centered}
                />
              )

            case 'body_quote':
              return <BodyQuote key={index} quote={component.quote} />

            case '50_50':
              return (
                <FiftyFifty
                  key={index}
                  contentLeft={component.textLeft}
                  title={component.title}
                  text={component.text}
                  image={component.image}
                  video={component.video}
                />
              )

            case '50_50_text_right':
              return (
                <FiftyFifty
                  key={index}
                  title={component.title}
                  text={component.text}
                  image={component.image}
                />
              )

            case '50_50_text_left':
              return (
                <FiftyFifty
                  key={index}
                  contentLeft={true}
                  title={component.title}
                  text={component.text}
                  image={component.image}
                />
              )

            case 'inline_image':
              return (
                <InlineMedia
                  key={index}
                  image={component.image}
                  caption={component.caption}
                />
              )

            case 'inline_image_large':
              return (
                <InlineMedia
                  key={index}
                  large={true}
                  image={component.image}
                  caption={component.caption}
                />
              )

            case 'full_width_image_small':
              return <FullWidthImageSmall key={index} index={index} image={component.image.url} />

            case 'logo_carousel':
              return (
                <LogoCarousel
                  key={index}
                  title={component.title}
                  companies={component.companies}
                  animationSpeed={component.animationSpeed}
                />
              )

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
              )

            case 'subscription_form':
              return (
                component.subscriptionForm && (
                  <MailchimpForm
                    key={index}
                    title={component.subscriptionForm.title}
                    listId={component.subscriptionForm.listId}
                    description={component.subscriptionForm.description}
                    inputFields={component.subscriptionForm.extraInputFields}
                    buttonLabel={component.subscriptionForm.button}
                    hasShadow={component.subscriptionForm.hasShadow}
                  />
                )
              )
          }
        })}

        <SocialShare
          facebookLink={`https://www.facebook.com/sharer/sharer.php?u=${fullUrl}`}
          linkedinLink={`https://www.linkedin.com/shareArticle?mini=true&url=${fullUrl}&title=${data.title}&summary=${data.seo.description}&source=Hike&20One`}
          twitterLink={`https://twitter.com/intent/tweet?text=${data.title}&url=${fullUrl}`}
        />

        {data.contact && (
          <Contact
            title={data.contact.title}
            button={data.contact.button}
            link={data.contact.externalLink}
            target="_blank" rel="noopener noreferrer">
            <ContactShapes.variation1Front position="front" />
          </Contact>
        )}

        <TextCenter title={data.caseLinksTitle} />

        {data.caseLinks.length > 0 && (
          <WorkOverview>
            {data.caseLinks.map((item, index) => (
              <CaseExtractSmall
                key={index}
                title={item.header.title}
                subtitle={item.header.subtitle}
                image={item.header.backgroundImage}
                companyName={item.companyName}
                color={item.caseThemeColor.hex}
                slug={item.slug}
              />
            ))}
          </WorkOverview>
        )}

        {data.updateLinks.length > 0 && (
          <React.Fragment>
            <TextCenter title={data.updateLinksTitle} />

            <UpdateOverviewSmall>
              {data.updateLinks.map((item, index) => (
                <UpdateExtractSmall
                  key={index}
                  index={index}
                  authors={item.authors}
                  category={item.category.name}
                  color={item.themeColor.hex}
                  date={item.date}
                  href={item.externalLink ? item.externalLink : item.slug}
                  image={item.image.url}
                  target={item.externalLink ? true : false}
                  title={item.title}
                  topic={item.topic}
                />
              ))}
            </UpdateOverviewSmall>
          </React.Fragment>
        )}
      </article>

      <Footer form={footer.form} />

    </main>
  </Layout>
)

Topic.getInitialProps = async ({ req, res, query, asPath }) => {
  const baseUrl = req ? `${req.protocol}://${req.get('Host')}` : ''
  const fontsLoaded = req ? req.cookies['fonts-loaded'] : cookie('fonts-loaded')
  const fullUrl = `${baseUrl}${asPath}`
  const fetchJson = model => getData(baseUrl, model, res)
  const fetchAll = models => Promise.all(models.map(fetchJson))
  const [footer, data] = await fetchAll(['footer', `topics/${query.slug}`])

  return { data, footer, fontsLoaded, fullUrl }
}

Topic.propTypes = {
  data: PropTypes.object,
  footer: PropTypes.object,
  fontsLoaded: PropTypes.string,
  fullUrl: PropTypes.string,
}

export default Topic
