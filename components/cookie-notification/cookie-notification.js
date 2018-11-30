const CookieNotification = ({ text, callToActionLabel, callToActionUrl, saveCookie }) => (
  <div className="cookie-notification">
    <span>{text}</span>
    <Link href={callToActionUrl}>
      <a>{callToActionLabel}</a>
    </Link>
    <button onClick={saveCookie}>Ok</button>
  </div>
)

export default CookieNotification