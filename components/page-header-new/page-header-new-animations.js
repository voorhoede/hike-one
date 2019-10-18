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
      { rotation: 360, ease: Power0.easeNone, repeat: -1 }, '-=.6')
}

export function timelineDoubleDiamond() {
  return new TimelineLite()
    .pause()
    .fromTo('.page-header-new__animation-background', .5,
      { y: 500 },
      { y: 0, ease: Power2.easeIn })
    .fromTo('.animated-shape-double-diamond .shape-back', .9,
      { x: '100vw', transformOrigin: 'center' },
      { x: 0 }, '-=.1')
    .fromTo('.animated-shape-double-diamond .shape-front', .9,
      { x: '-100vw', transformOrigin: 'center' },
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
    .add('startAnimation')
    .fromTo('.page-header-new__animation-background', .5,
      { y: 500 },
      { y: 0, ease: Power2.easeIn })
    .fromTo('.shape-arrow-14', 1.2,
      { y: 400 },
      { y: 0, ease: Power2.easeInOut }, 'startAnimation')
    .fromTo('.shape-arrow-8', 1,
      { y: 300 },
      { y: 0, ease: Power2.easeInOut }, 'startAnimation')
    .fromTo('.shape-arrow-17', 1.2,
      { y: 300 },
      { y: 0, ease: Power2.easeInOut }, 'startAnimation')
    .fromTo('.shape-arrow-13', 1.3,
      { y: 300 },
      { y: 0, ease: Power2.easeInOut }, 'startAnimation')
    .fromTo('.shape-arrow-15', 1,
      { y: 150 },
      { y: 0, ease: Power2.easeInOut }, 'startAnimation')
    .fromTo('.shape-arrow-10', 1.4,
      { y: 200 },
      { y: 0, ease: Power2.easeInOut }, 'startAnimation')
    .fromTo('.shape-arrow-16', 1.6,
      { y: 300 },
      { y: 0, ease: Power2.easeInOut }, 'startAnimation')
    .fromTo('.shape-arrow-11', 1.6,
      { y: 350 },
      { y: 0, ease: Power2.easeInOut }, 'startAnimation')
    .fromTo('.shape-arrow-12', 1.5,
      { y: 300 },
      { y: 0, ease: Power2.easeInOut }, 'startAnimation')
    .fromTo('.shape-arrow-1', 1.8,
      { y: 250 },
      { y: 0, ease: Power2.easeInOut }, 'startAnimation')
    .fromTo('.shape-arrow-6', 2,
      { y: 150 },
      { y: 0, ease: Power2.easeInOut }, 'startAnimation')
    .fromTo('.shape-arrow-4', 1.8,
      { y: 350 },
      { y: 0, ease: Power2.easeInOut }, 'startAnimation')
    .fromTo('.shape-arrow-5', 1.8,
      { y: 350 },
      { y: 0, ease: Power2.easeInOut }, 'startAnimation')
    .fromTo('.shape-arrow-3', 2,
      { y: 300 },
      { y: 0, ease: Power2.easeInOut }, 'startAnimation')
    .fromTo('.shape-arrow-2', 2.1,
      { y: 200 },
      { y: 0, ease: Power2.easeInOut }, 'startAnimation')
    .fromTo('.shape-arrow-7', 2.1,
      { y: 150 },
      { y: 0, ease: Power2.easeInOut }, 'startAnimation')
    .fromTo('.shape-arrow-9', 2.2,
      { y: 150 },
      { y: 0, ease: Power2.easeInOut }, 'startAnimation')
    .fromTo('.shape-arrow-14', .8,
      { scale: 0.1, transformOrigin: 'center' },
      { scale: 1 }, '-=1.4')
    .fromTo('.shape-arrow-8', .8,
      { scale: .5, transformOrigin: 'center' },
      { scale: 1 }, '-=1.6')
    .fromTo('.shape-arrow-17', .8,
      { scale: .1, transformOrigin: 'center' },
      { scale: 1 }, '-=1.4')
    .fromTo('.shape-arrow-13', .8,
      { scale: .1, transformOrigin: 'center' },
      { scale: 1 }, '-=1.5')
    .fromTo('.shape-arrow-15', 1,
      { scale: .5, transformOrigin: 'center' },
      { scale: 1 }, '-=1.5')
    .fromTo('.shape-arrow-10', .8,
      { scale: .5, transformOrigin: 'center' },
      { scale: 1 }, '-=1.4')
    .fromTo('.shape-arrow-16', .8,
      { scale: .2, transformOrigin: 'center' },
      { scale: 1 }, '-=1.1')
    .fromTo('.shape-arrow-11', .8,
      { scale: 0.05, transformOrigin: 'center' },
      { scale: 1 }, '-=.8')
    .fromTo('.shape-arrow-12', .8,
      { scale: 0.05, transformOrigin: 'center' },
      { scale: 1 }, '-=1.2')
    .fromTo('.shape-arrow-1', .8,
      { scale: .3, transformOrigin: 'center' },
      { scale: 1 }, '-=1.4')
    .fromTo('.shape-arrow-6', .8,
      { scale: .2, transformOrigin: 'center' },
      { scale: 1 }, '-=1.1')
    .fromTo('.shape-arrow-4', .8,
      { scale: .05, transformOrigin: 'center' },
      { scale: 1 }, '-=1.1')
    .fromTo('.shape-arrow-5', .8,
      { scale: .05, transformOrigin: 'center' },
      { scale: 1 }, '-=1.1')
    .fromTo('.shape-arrow-3', .8,
      { scale: .05, transformOrigin: 'center' },
      { scale: 1 }, '-=1.1')
    .fromTo('.shape-arrow-2', .8,
      { scale: .5, transformOrigin: 'center' },
      { scale: 1 }, '-=1.1')
    .fromTo('.shape-arrow-7', .8,
      { scale: .5, transformOrigin: 'center' },
      { scale: 1 }, '-=1.2')
    .fromTo('.shape-arrow-9', .8,
      { scale: .5, transformOrigin: 'center' },
      { scale: 1 }, '-=.9')
    .fromTo('.page-header-new__title', .8,
      { opacity: 0, transformOrigin: 'center' },
      { opacity: 1, ease: Power3.easeIn }, '-=1.4')
    .fromTo('.page-header-new__title', .8,
      { y: 40 },
      { y: 0, ease: Power3.easeOut }, '-=1.2')
}
