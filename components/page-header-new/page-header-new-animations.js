import { Power0, Power2, Power3, TimelineLite } from 'gsap'

export function timelineDiamond() {
  return new TimelineLite()
    .pause()
    .fromTo('.page-header-new__animation-background', .5,
      { y: 500 },
      { y: 0, ease: Power2.easeIn })
    .fromTo('.animated-shape-diamond .shape-back', .5,
      { scale: 0, transformOrigin: 'center' },
      { scale: 1, ease: Power2.easeIn }, '+=.2')
    .fromTo('.animated-shape-diamond .shape-back', .3,
      { opacity: 0 },
      { opacity: 1 }, '-=.5')
    .fromTo('.animated-shape-diamond .shape-front', .7,
      { scale: 0, transformOrigin: 'center' },
      { scale: 1, ease: Power2.easeOut }, '-=.1')
    .fromTo('.page-header-new__title', .8,
      { opacity: 0, transformOrigin: 'center' },
      { opacity: 1, ease: Power3.easeIn }, '-=.6')
    .fromTo('.page-header-new__title', .8,
      { y: 40 },
      { y: 0, ease: Power3.easeOut }, '-=.6')
    .to('.animated-shape-diamond .shape-front', 32,
      { rotation: 360, ease: Power0.easeNone, repeat: -1 }, '-=.2')
}

export function timelineDoubleDiamond() {
  return new TimelineLite()
    .pause()
    .fromTo('.page-header-new__animation-background', .5,
      { y: 500 },
      { y: 0, ease: Power2.easeIn })
    .fromTo('.animated-shape-double-diamond .shape-back', .9,
      { x: '70vw', transformOrigin: 'center' },
      { x: 0 }, '-=.1')
    .fromTo('.animated-shape-double-diamond .shape-front', .9,
      { x: '-70vw', transformOrigin: 'center' },
      { x: 0 }, '-=.9')
    .fromTo('.animated-shape-double-diamond .shape-back', 1.1,
      { scale: 5, transformOrigin: 'center' },
      { scale: 1 }, '-=1.1')
    .fromTo('.animated-shape-double-diamond .shape-front', 1.1,
      { scale: 5, transformOrigin: 'center' },
      { scale: 1 }, '-=1.1')
    .fromTo('.page-header-new__title', .8,
      { opacity: 0, transformOrigin: 'center' },
      { opacity: 1, ease: Power3.easeIn }, '-=.5')
    .fromTo('.page-header-new__title', .8,
      { y: 40 },
      { y: 0, ease: Power3.easeOut }, '-=.6')
}

export function timelineTriangles() {
  return new TimelineLite()
    .pause()
    .to('.animated-shape-traingles .shape-back', 3, { opacity: 0 })
}
