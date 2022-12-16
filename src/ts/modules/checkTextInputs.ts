export const checkTextInput = (selector: string) => {
  const txtInputs = document.querySelectorAll(selector);

  txtInputs.forEach((input: HTMLElement) => {
    input.addEventListener("keypress", function (e: any) {
      if (e.key.match(/[^а-яё 0-9]/gi)) {
        e.preventDefault();
      }
    });
  });
};
