export const scrolling = (upSelector: string) => {
  const upElem = document.querySelector(upSelector);

  window.addEventListener("scroll", () => {
    if (document.documentElement.scrollTop > 1650) {
      upElem.classList.add("animated", "fadeIn");
      upElem.classList.remove("fadeOut");
    } else {
      upElem.classList.add("fadeOut");
      upElem.classList.remove("fadeIn");
    }
  });

  const links = document.querySelectorAll('[href^="#"]'),
    speed = 0.3;

  links.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();

      const widthTop = document.documentElement.scrollTop;
      const hash = this.hash;
      const toBlock = document.querySelector(hash).getBoundingClientRect().top;
      let start: number = null;

      requestAnimationFrame(step);

      function step(time: number) {
        if (start === null) {
          start = time;
        }

       const progress = time - start,
          numOfPix = toBlock < 0 
          ? Math.max(widthTop - progress / speed, widthTop + toBlock) 
          : Math.min(widthTop + progress / speed, widthTop + toBlock);

        document.documentElement.scrollTo(0, numOfPix);

        if (numOfPix != widthTop + toBlock) {
          requestAnimationFrame(step);
        } else {
          location.hash = hash;
        }
      }
    });
  });
};
