import React from 'react'
import PropTypes from 'prop-types'
import 'isomorphic-fetch'
import getData from '../lib/get-data'
import cookie from '../components/_helpers/cookie'
import {
  Author,
  BodyQuote,
  CallToAction,
  Contact,
  ContactShapes,
  FiftyFifty,
  Footer,
  FullWidthHeader,
  FullWidthImageSmall,
  InlineMedia,
  Layout,
  MailchimpForm,
  MenuBar,
  RichBodyText,
  SocialShare,
  TextCenter,
  UpdateExtractSmall,
  UpdateOverviewSmall,
} from '../components'

const Update = ({ Data = {}, fontsLoaded = '', fullUrl = '' }) => (
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
          color={Data.color.hex}
          title={Data.title}
          authorName={Data.authors.map(author => author.name).join(', ')}
          updatedDate={Data.date}
        />
        {Data.content.map((component, index) => {
          switch (component.itemType) {
            case '50_50':
              return (
                <FiftyFifty
                  key={index}
                  classes="fifty-fifty-update"
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
                  classes="fifty-fifty-update"
                  title={component.title}
                  text={component.text}
                  image={component.image}
                />
              )

            case '50_50_text_left':
              return (
                <FiftyFifty
                  key={index}
                  classes="fifty-fifty-update"
                  contentLeft={true}
                  title={component.title}
                  text={component.text}
                  image={component.image}
                />
              )

            case 'body_quote':
              return (
                <BodyQuote
                  key={index}
                  quote={component.quote}
                  quotee={component.quotee}
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

            case 'full_width_image_small':
              return <FullWidthImageSmall key={index} index={index} image={component.image.url} />

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

            case 'rich_body_text':
              return (
                <RichBodyText
                  key={index}
                  content={component.content}
                  textCenter={component.centered}
                />
              )

            case 'subscription_form':
              return (
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

            case 'video':
              return (
                <InlineMedia
                  key={index}
                  video={component}
                  caption={component.caption}
                  large={component.large}
                />
              )
          }
        })}

        <SocialShare
          facebookLink={`https://www.facebook.com/sharer/sharer.php?u=${fullUrl}`}
          linkedinLink={`https://www.linkedin.com/shareArticle?mini=true&url=${fullUrl}&title=${Data.title}&summary=${Data.seo.description}&source=Hike&20One`}
          twitterLink={`https://twitter.com/intent/tweet?text=${Data.title}&url=${fullUrl}`}
        />

        <div className="authors">
          {Data.authors.map((author, index) => {
            return (
              <Author
                key={index}
                name={author.name}
                role={author.role}
                photoUrl={author.photo.url}
                summary={author.summary}
              />
            )
          })}
        </div>

        {Data.contact && (
          <Contact
            title={Data.contact.title}
            button={Data.contact.button}
            link={Data.contact.externalLink}
            target="_blank" rel="noopener noreferrer">
            <ContactShapes.variation1Front position="front" />
          </Contact>
        )}

        <TextCenter
          classes="text-center-font-medium text-center-spacing-small"
          title={Data.updateLinksTitle}
        />

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
      </article>

      <Footer form={Data.footer.form} />

    </main>
  </Layout>
)

Update.getInitialProps = async ({ req, res, query, asPath }) => {
  const baseUrl = req ? `${req.protocol}://${req.get('Host')}` : ''
  const fullUrl = `${baseUrl}${asPath}`
  const data = await getData(baseUrl, `updates/${query.slug}`, res)
  const fontsLoaded = req ? req.cookies['fonts-loaded'] : cookie('fonts-loaded')

  return { Data: data, fontsLoaded, fullUrl }
}

Update.propTypes = {
  Data: PropTypes.object,
  fontsLoaded: PropTypes.string,
  fullUrl: PropTypes.string,
}

export default Update
