export const modals = () => {
  let btnPressed = false;
  const bindModal = ({
    triggerSelector,
    triggerModalSelector,
    triggerCloseSelector,
    triggerDestroy,
  }: {
    triggerSelector: string;
    triggerModalSelector: string;
    triggerCloseSelector: string;
    triggerDestroy: boolean;
  }) => {
    const triggers = document.querySelectorAll(triggerSelector);
    const modal = document.querySelector<HTMLElement>(triggerModalSelector);
    const close = document.querySelector(triggerCloseSelector);
    const windows = document.querySelectorAll("[data-modal]");
    const scroll = calcScroll();

    triggers.forEach((trigger) => {
      trigger.addEventListener("click", (e: any) => {
        if (e.target) {
          e.preventDefault();
        }

        btnPressed = true;

        if (triggerDestroy) {
          trigger.remove();
        }

        windows.forEach((window: HTMLElement) => {
          window.style.display = "none";
          window.classList.add("animated", "fadeIn");
        });

        modal.style.display = "block";
        document.body.style.overflow = "hidden";
        document.body.style.marginRight = `${scroll}px`;
      });
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        modal.style.display = "none";
        document.body.style.overflow = "";
      }
    });

    const closeModal = () => {
      windows.forEach((window: HTMLElement) => {
        window.style.display = "none";
      });
      modal.style.display = "none";
      document.body.style.overflow = "";
      document.body.style.marginRight = `0px`;
    };

    close.addEventListener("click", () => {
      closeModal();
    });

    modal.addEventListener("click", (e: any) => {
      if (e.target === modal) {
        closeModal();
      }
    });
  };

  const showModalByTime = (selector: string, time: number) => {
    setTimeout(() => {
      let display;
      document.querySelectorAll("[data-modal]").forEach((modal) => {
        if (getComputedStyle(modal).display !== "none") {
          display = "block";
        }
      });

      if (!display) {
        (document.querySelector(selector) as HTMLElement).style.display =
          "block";
        document.body.style.overflow = "hidden";
        const scroll = calcScroll();
        document.body.style.marginRight = `${scroll}px`;
      }
    }, time);
  };

  const calcScroll = () => {
    const div = document.createElement("div");

    div.style.width = "50px";
    div.style.height = "50px";
    div.style.overflowY = "scroll";
    div.style.visibility = "hidden";

    document.body.appendChild(div);
    const scrollWidth = div.offsetWidth - div.clientWidth;
    div.remove();

    return scrollWidth;
  };

  const openByScroll = (selector: string) => {
    window.addEventListener("scroll", () => {
      const scrollHeight = Math.max(
        document.documentElement.scrollHeight,
        document.body.scrollHeight
      );
      if (
        !btnPressed &&
        window.pageYOffset + document.documentElement.clientHeight >=
          document.documentElement.scrollHeight
      ) {
        (document.querySelector(selector) as HTMLElement).click();
      }
    });
  };

  bindModal({
    triggerSelector: ".button-design",
    triggerModalSelector: ".popup-design",
    triggerCloseSelector: ".popup-design .popup-close",
    triggerDestroy: false,
  });
  bindModal({
    triggerSelector: ".button-consultation",
    triggerModalSelector: ".popup-consultation",
    triggerCloseSelector: ".popup-consultation .popup-close",
    triggerDestroy: false,
  });
  bindModal({
    triggerSelector: ".fixed-gift",
    triggerModalSelector: ".popup-gift",
    triggerCloseSelector: ".popup-gift .popup-close",
    triggerDestroy: true,
  });
  openByScroll(".fixed-gift");

  // showModalByTime(".popup-consultation", 6000);
};
