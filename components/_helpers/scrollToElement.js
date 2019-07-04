import TweenLite from 'gsap'
import ScrollToPlugin from 'gsap/umd/ScrollToPlugin'

// Without this line, ScrollToPlugin may get dropped with Tree shaking (https://greensock.com/docs/NPMUsage)
const plugins = [ ScrollToPlugin ]

const scrollToElement = (elementClass) => {
  TweenLite.to(window, 0.3, {
    scrollTo: {
      y: `.${elementClass}`,
      autoKill: false,
    },
  })
}

export default scrollToElement
