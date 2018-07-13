import TweenLite from "gsap";
import ScrollToPlugin from "gsap/umd/ScrollToPlugin";

const scrollToElement = (elementClass) => {
	TweenLite.to(window, 0.3, {scrollTo: { y:`.${elementClass}` , autoKill:false } });
};

export default scrollToElement;
