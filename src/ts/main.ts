import { modals, sliders, forms } from "./modules";

window.addEventListener("DOMContentLoaded", () => {
  "use strict";

  modals();
  sliders({
    slides: ".feedback-slider-item",
    dir: "horizontal",
    prev: ".main-prev-btn",
    next: ".main-next-btn",
  });
  sliders({
    slides: ".main-slider-item",
    dir: "vertical",
    prev: ".main-prev-btn",
    next: ".main-next-btn",
  });
  forms();
});
