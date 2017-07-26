import TweenLite from "gsap";
import ScrollToPlugin from "gsap/ScrollToPlugin";

const scrollToElement = (elementClass) => {
	TweenLite.to(window, 0.3, {scrollTo: `.${elementClass}`});
};

export default scrollToElement;
