import React from 'react'

const googleTagManagerConfig = () => (
  <script dangerouslySetInnerHTML={{__html: `(function(w,d,s,l,i){w[l]=w[l]||[]w[l].push({'gtm.start':
  new Date().getTime(),event:'gtm.js'})var f=d.getElementsByTagName(s)[0],
  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:''j.async=truej.src=
  'https://www.googletagmanager.com/gtm.js?id='+i+dlf.parentNode.insertBefore(j,f)
  })(window,document,'script','dataLayer','GTM-5KJ6PKN')
  `}} ></script>
)

export default googleTagManagerConfig
