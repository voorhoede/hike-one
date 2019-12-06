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
  ContactForm,
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

const Update = ({ data = {}, footer = {}, fontsLoaded = '', fullUrl = '' }) => (
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
          imagePositionCenter={data.imagePositionCenter}
          color={data.color.hex}
          title={data.title}
          authorName={data.authors.map(author => author.name).join(', ')}
          updatedDate={data.date}
        />
        {data.content.map((component, index) => {
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

              case 'contact_form_component':
                return (
                  <ContactForm
                    key={index}
                    singleForm={true}
                    form={{
                      forms: [component.form],
                      thankYouMessage: component.thankYouMessage,
                      title: component.title,
                    }}
                  />
                )
          }
        })}

        <SocialShare
          url={fullUrl}
          title={data.title}
          description={data.seo.description}
        />

        <div className="authors">
          {data.authors.map((author, index) => {
            return (
              <Author
                key={index}
                name={author.name}
                roles={author.roles}
                photoUrl={author.photo.url}
                summary={author.summary}
              />
            )
          })}
        </div>

        {data.contact && (
          <Contact
            title={data.contact.title}
            button={data.contact.button}
            link={data.contact.externalLink}
            target="_blank" rel="noopener noreferrer">
            <ContactShapes.variation1Front position="front" />
          </Contact>
        )}

        <TextCenter
          classes="text-center-font-medium text-center-spacing-small"
          title={data.updateLinksTitle}
        />

        <UpdateOverviewSmall>
          {data.updateLinks.map((item, index) => (
            <UpdateExtractSmall
              key={index}
              index={index}
              authors={item.authors}
              category={item.category.name}
              color={item.themeColor.hex}
              date={item.date}
              link={item.externalLink}
              slug={item.slug}
              image={item.image.url}
              target={item.externalLink ? true : false}
              title={item.title}
              topic={item.topic}
            />
          ))}
        </UpdateOverviewSmall>
      </article>

      <Footer form={footer.form} />

    </main>
  </Layout>
)

Update.getInitialProps = async ({ req, res, query, asPath }) => {
  const baseUrl = req ? `${req.protocol}://${req.get('Host')}` : ''
  const fontsLoaded = req ? req.cookies['fonts-loaded'] : cookie('fonts-loaded')
  const fullUrl = `${baseUrl}${asPath}`
  const fetchJson = model => getData(baseUrl, model, res)
  const fetchAll = models => Promise.all(models.map(fetchJson))
  const [footer, data] = await fetchAll(['footer', `updates/${query.slug}`])

  return { data, footer, fontsLoaded, fullUrl }
}

Update.propTypes = {
  data: PropTypes.object,
  footer: PropTypes.object,
  fontsLoaded: PropTypes.string,
  fullUrl: PropTypes.string,
}

export default Update
