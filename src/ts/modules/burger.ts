export const burger = (menuSelector: string, burgerSelector: string) => {
  const menuElem = document.querySelector<HTMLElement>(menuSelector);
  const burgerElem = document.querySelector(burgerSelector);

  menuElem.style.display = "none";
  const windowStyle = menuElem.style.display == "none" && window.screen.availWidth < 993;

  burgerElem.addEventListener("click", () => {
    menuElem.style.display = windowStyle ? "block" :  "none";
  });

  window.addEventListener("resize", () => {
    if (window.screen.availWidth > 992) {
      menuElem.style.display = "none";
    }
  });
};
