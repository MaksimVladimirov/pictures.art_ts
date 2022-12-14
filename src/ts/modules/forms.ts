export const forms = () => {
  const forms = document.querySelectorAll("form");
  const inputs = document.querySelectorAll("input");
  const upload = document.querySelectorAll('[name="upload"]');
  
  const message = {
    loading: "Загрузка...",
    success: "Спасибо! Скоро мы с вами свяжемся",
    failure: "Что-то пошло не так...",
    spinner: "assets/img/spinner.gif",
    ok: "assets/img/ok.png",
    fail: "assets/img/fail.png",
  };

  const path = {
    designer: "assets/server.php",
    question: "assets/question.php",
  };

  const postData = async (url: string, data: string) => {
    const result = await fetch(url, {
      method: "POST",
      body: data,
    });

    return await result.text();
  };

  const clearInputs = () => {
    inputs.forEach((input) => {
      input.value = "";
    });
    upload.forEach((item) => {
      item.previousElementSibling.textContent = "Файл не выбран";
    });
  };

  upload.forEach((item: any,) => {
    item.addEventListener("input", () => {
      let dots;
      const array = item.files[0].name.split(".");
      array[0].length > 6 ? (dots = "...") : (dots = ".");
      const name = array[0].substring(0, 5) + dots + array[1];
      item.previousElementSibling.textContent = name;
    });
  });

  forms.forEach((form) => {
    form.addEventListener("submit", (e: any) => {
      e.preventDefault();

      const statusMessage = document.createElement("div");
      statusMessage.classList.add("status");
      form.parentNode.appendChild(statusMessage);

      form.classList.add("animated", "fadeOutUp");
      setTimeout(() => {
        form.style.display = "none";
      }, 400);

      const statusImg = document.createElement("img");
      statusImg.setAttribute("src", message.spinner);
      statusImg.classList.add("animated", "fadeInUp");
      statusMessage.appendChild(statusImg);

      const textMessage = document.createElement("div");
      textMessage.textContent = message.loading;
      statusMessage.appendChild(textMessage);

      const formData: any = new FormData(form);
      let api;
      form.closest(".popup-design") || form.classList.contains("calc_form") ? (api = path.designer) : (api = path.question);
      console.log(api);

      postData(api, formData)
        .then((result) => {
          console.log(result);
          statusImg.setAttribute("src", message.ok);
          textMessage.textContent = message.success;
        })
        .catch(() => {
          statusImg.setAttribute("src", message.fail);
          statusMessage.textContent = message.failure;
        })
        .finally(() => {
          clearInputs();
          setTimeout(() => {
            statusMessage.remove();
            form.style.display = "block";
            form.classList.remove("fadeOutUp");
            form.classList.add("fadeInUp");
          }, 5000);
        });
    });
  });
};
