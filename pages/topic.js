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

const Topic = ({ Data = {}, fontsLoaded = '', fullUrl = '' }) => (
  <Layout
    title={`Hike One - ${Data.title}`}
    fontsLoaded={fontsLoaded}
    seo={Data.seo}
    url={fullUrl}>
    <main className="main js-main">
      <MenuBar color="white" />

      <article className="article">
        <FullWidthHeader
          headerImage={Data.headerImage.url}
          headerImageLarger={Data.headerImageLarger}
          color={Data.color.hex}
          title={Data.title}
          titleOnly={true}
        />

        {Data.content.map((component, index) => {
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
                  image={component.image ? component.image.url : undefined}
                  caption={component.caption}
                />
              )

            case 'inline_image_large':
              return (
                <InlineMedia
                  key={index}
                  large={true}
                  image={component.image ? component.image.url : undefined}
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
          linkedinLink={`https://www.linkedin.com/shareArticle?mini=true&url=${fullUrl}&title=${Data.title}&summary=${Data.seo.description}&source=Hike&20One`}
          twitterLink={`https://twitter.com/intent/tweet?text=${Data.title}&url=${fullUrl}`}
        />

        {Data.contact && (
          <Contact
            title={Data.contact.title}
            button={Data.contact.button}
            link={Data.contact.externalLink}
            target="_blank" rel="noopener noreferrer">
            <ContactShapes.variation1Front position="front" />
          </Contact>
        )}

        <TextCenter title={Data.caseLinksTitle} />

        {Data.caseLinks.length > 0 && (
          <WorkOverview>
            {Data.caseLinks.map((item, index) => (
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

        {Data.updateLinks.length > 0 && (
          <React.Fragment>
            <TextCenter title={Data.updateLinksTitle} />

            <UpdateOverviewSmall>
              {Data.updateLinks.map((item, index) => (
                <UpdateExtractSmall
                  key={index}
                  index={index}
                  title={item.title}
                  date={item.date}
                  authors={item.authors}
                  href={item.link}
                  image={item.image.url}
                  category={item.category.name}
                  color={item.themeColor.hex}
                  target={item.isExternalLink}
                />
              ))}
            </UpdateOverviewSmall>
          </React.Fragment>
        )}
      </article>

      <Footer
        callToActionLabel={Data.footer.callToActionLabel}
        callToActionUrl={Data.footer.callToActionUrl}
      />
    </main>
  </Layout>
)

Topic.getInitialProps = async ({ req, res, query, asPath }) => {
  const baseUrl = req ? `${req.protocol}://${req.get('Host')}` : ''
  const fullUrl = `${baseUrl}${asPath}`
  const data = await getData(baseUrl, `topics/${query.slug}`, res)
  const fontsLoaded = req ? req.cookies['fonts-loaded'] : cookie('fonts-loaded')

  return { Data: data, fontsLoaded, fullUrl }
}

Topic.propTypes = {
  Data: PropTypes.object,
  fontsLoaded: PropTypes.string,
  fullUrl: PropTypes.string,
}

export default Topic
