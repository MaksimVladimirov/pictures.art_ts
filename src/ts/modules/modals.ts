export const modals = () => {
  const bindModal = ({
    triggerSelector,
    triggerModalSelector,
    triggerCloseSelector,
    triggerCloseClickOverlay,
  }: {
    triggerSelector: string;
    triggerModalSelector: string;
    triggerCloseSelector: string;
    triggerCloseClickOverlay: boolean;
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

        windows.forEach((window: HTMLElement) => {
          window.style.display = "none";
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

    modal.addEventListener("click", (e:any) => {
      if (e.target === modal && triggerCloseClickOverlay) {
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
        (document.querySelector(selector) as HTMLElement).style.display = "block";
        document.body.style.overflow = "hidden";
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

  bindModal({
    triggerSelector: ".button-design",
    triggerModalSelector: ".popup-design",
    triggerCloseSelector: ".popup-design .popup-close",
    triggerCloseClickOverlay: false,
  });
  bindModal({
    triggerSelector: ".button-consultation",
    triggerModalSelector: ".popup-consultation",
    triggerCloseSelector: ".popup-consultation .popup-close",
    triggerCloseClickOverlay: false,
  });

  showModalByTime(".popup-consultation", 60000);
};
