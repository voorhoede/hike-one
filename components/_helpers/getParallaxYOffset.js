const getParallaxYOffset = (element, speed) => {
  const elBoundingRect = element.getBoundingClientRect()
  const windowHeight = document.body.clientHeight || document.documentElement.clientHeight || 0
  const scrolledHeight = document.body.scrollTop || document.documentElement.scrollTop || 0

  // y coordinate bottom of viewport relative from top of document
  const bottomScreen = windowHeight + scrolledHeight
  // y coordinate top of element relative from top of document
  const elementTop = elBoundingRect.top + window.pageYOffset
  // y coordinate bottom of element relative from top of document
  const elementBottom = elBoundingRect.bottom + window.pageYOffset
  const elementHalf = elBoundingRect.height / 2
  const windowHalf = windowHeight / 2

  if (elementTop > (bottomScreen)) {
    // element below viewport
    return -((elementHalf + windowHalf) * speed)

  } else if (elementBottom < scrolledHeight) {
    // element above viewport
    return (elementHalf + windowHalf) * speed
  } else {
    // element is partial in view
    const viewportMiddle = scrolledHeight + windowHalf
    const elementMiddle = elementTop + elementHalf

    // how far is element middle from viewportMiddle
    const elementFromMiddle = elementMiddle - viewportMiddle

    if (elementFromMiddle > 0) {
      // element middle under middle of the viewport
      return -((elementFromMiddle) * speed)
    } else {
      // element middle over middle of the viewport
      return ((-elementFromMiddle) * speed)
    }
  }
}

export default getParallaxYOffset
