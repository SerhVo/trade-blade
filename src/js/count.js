import { CountUp } from "countup.js";

document.addEventListener("DOMContentLoaded", () => {
  const animateNumbers = (selector, endValue, extraOptions = {}) => {
    const el = document.querySelector(selector);
    if (el) {
      const options = {
        duration: 3,
        separator: "",
        ...extraOptions, 
      };
      const countUp = new CountUp(el, endValue, options);
      if (!countUp.error) {
        countUp.start();
      } else {
        console.error(countUp.error);
      }
    }
  };

  animateNumbers("#profit", 2756, { suffix: "%" });
  animateNumbers("#deals", 67);
  animateNumbers("#subscribers", 375000);
});
