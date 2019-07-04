import TweenLite from 'gsap'
import 'gsap/umd/ScrollToPlugin' // Needed to enable TweenLite 'scrollTo' functionality.

const scrollToElement = (elementClass) => {
  TweenLite.to(window, 0.3, {
    scrollTo: {
      y: `.${elementClass}`,
      autoKill: false,
    },
  })
}

export default scrollToElement
