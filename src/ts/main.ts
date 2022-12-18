import {
  modals,
  sliders,
  forms,
  mask,
  checkTextInput,
  showMoreStyles,
  calc,
  filter,
  accordion,
  burger,
} from "./modules";

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
  mask('[name="phone"]');
  checkTextInput('[name="name"]');
  checkTextInput('[name="message"]');
  showMoreStyles(".button-styles", "#styles .row");
  calc({
    size: "#size",
    material: "#material",
    options: "#options",
    promocode: ".promocode",
    result: ".calc-price",
  });
  filter();
  accordion(".accordion-heading");
  burger(".burger-menu", ".burger");
});
