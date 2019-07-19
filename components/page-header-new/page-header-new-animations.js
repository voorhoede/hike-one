import { TimelineLite } from 'gsap'

export function timelineDiamond() {
  return new TimelineLite()
    .pause()
    .to('.animated-shape .shape-front', 1, {
      scale: '+=100', transformOrigin: 'center',
    })
}

export function timelineDoubleDiamond() {
  return new TimelineLite()
    .pause()
    .to('.animated-shape .shape-back', 2, { opacity: 0 })
}

export function timelineTriangles() {
  return new TimelineLite()
    .pause()
    .to('.animated-shape .shape-back', 3, { opacity: 0 })
}
