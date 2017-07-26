import TweenLite from "gsap";
import ScrollToPlugin from "gsap/ScrollToPlugin";

const scrollToElement = (element) => {

	const body = document.body;
	const bodyTop = body.getBoundingClientRect().top;
	const targetTop = element.getBoundingClientRect().top;
	const offsetTop = targetTop - bodyTop;
	TweenLite.to(window, 0.3, {scrollTo: offsetTop});
};

export default scrollToElement;
