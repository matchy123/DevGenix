import Aos from "aos";

export const riddaUtils = {
  animation() {
    Aos.init();
  },
  fixedHeader() {
    window.addEventListener("scroll", function () {
      if (document.querySelectorAll(".main-header").length) {
        var windowpos = document.documentElement.scrollTop;
        var siteHeader = document.querySelector(".main-header");
        if (windowpos >= 100) {
          siteHeader.classList.add("fixed-header");
        } else {
          siteHeader.classList.remove("fixed-header");
        }
      }
    });
  },
  scrollTop() {
    const scrollableElements = document.querySelectorAll(".scroll-to-target");
    scrollableElements.forEach((scrollableElement) => {
      scrollableElement.addEventListener("click", (event) => {
        event.preventDefault();
        const target = event.currentTarget.getAttribute("data-target");
        const scrollTarget = document.querySelector(target);
        window.scrollTo({
          top: scrollTarget.offsetTop,
          behavior: "smooth",
        });
      });
    });
  },
};
