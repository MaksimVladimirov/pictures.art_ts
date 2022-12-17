export const filter = () => {
  const menu = document.querySelector(".portfolio-menu"),
    items = menu.querySelectorAll("li"),
    btnAll = menu.querySelector(".all"),
    btnLovers = menu.querySelector(".lovers"),
    btnChef = menu.querySelector(".chef"),
    btnGirl = menu.querySelector(".girl"),
    btnGuy = menu.querySelector(".guy"),
    btnGrandmother = menu.querySelector(".grandmother"),
    btnGranddad = menu.querySelector(".granddad"),
    wrapper = document.querySelector(".portfolio-wrapper"),
    markAll = wrapper.querySelectorAll(".all"),
    markGirl = wrapper.querySelectorAll(".girl"),
    markGrandmother = wrapper.querySelectorAll(".grandmother"),
    markGranddad = wrapper.querySelectorAll(".granddad"),
    markLovers = wrapper.querySelectorAll(".lovers"),
    markChef = wrapper.querySelectorAll(".chef"),
    markGuy = wrapper.querySelectorAll(".guy"),
    no = document.querySelector<HTMLInputElement>(".portfolio-no");

  const typeFilter = (markType: any) => {
    markAll.forEach((mark: HTMLElement) => {
      mark.style.display = "none";
      mark.classList.remove("animated", "fadeIn");
    });

    no.style.display = "none";
    no.classList.remove("animated", "fadeIn");

    if (markType) {
      markType.forEach((mark: HTMLElement) => {
        mark.style.display = "block";
        mark.classList.add("animated", "fadeIn");
      });
    } else {
      no.style.display = "block";
      no.classList.add("animated", "fadeIn");
    }
  };

  btnAll.addEventListener("click", () => {
    typeFilter(markAll);
  });

  btnLovers.addEventListener("click", () => {
    typeFilter(markLovers);
  });

  btnChef.addEventListener("click", () => {
    typeFilter(markChef);
  });

  btnGuy.addEventListener("click", () => {
    typeFilter(markGuy);
  });

  btnGirl.addEventListener("click", () => {
    typeFilter(markGirl);
  });

  btnGrandmother.addEventListener("click", () => {
    typeFilter(markGrandmother);
  });

  btnGranddad.addEventListener("click", () => {
    typeFilter(markGranddad);
  });

  menu.addEventListener("click", (e: any) => {
   const target = e.target;

    if (target && target.tagName == "LI") {
      items.forEach((btn) => btn.classList.remove("active"));
      target.classList.add("active");
    }
  });
};
