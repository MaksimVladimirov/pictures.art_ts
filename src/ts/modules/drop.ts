export const drop = () => {
  const fileInputs = document.querySelectorAll('[name="upload"]');

  ["dragenter", "dragleave", "dragover", "drop"].forEach((eventName) => {
    fileInputs.forEach((input) => {
      input.addEventListener(eventName, preventDefaults, false);
    });
  });

  const preventDefaults = (e: Event) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const hightLight = (item: HTMLElement) => {
    (item.closest(".file_upload") as HTMLElement).style.border = "5px solid yellow";
    (item.closest(".file_upload") as HTMLElement).style.backgroundColor = "rgba(0,0,0, .7)";
  };

  const unHightLight = (item: HTMLElement) => {
    (item.closest(".file_upload") as HTMLElement).style.border = "none";

    if (item.closest(".calc_form")) {
      (item.closest(".file_upload") as HTMLElement).style.backgroundColor = "#fff";
    } else {
      (item.closest(".file_upload") as HTMLElement).style.backgroundColor = "#ededed";
    }
  };

  ["dragenter", "dragover"].forEach((eventName) => {
    fileInputs.forEach((input: HTMLElement) => {
      input.addEventListener(eventName, () => hightLight(input), false);
    });
  });

  ["dragleave", "drop"].forEach((eventName: string) => {
    fileInputs.forEach((input: HTMLElement) => {
      input.addEventListener(eventName, () => unHightLight(input), false);
    });
  });

  fileInputs.forEach((input: any) => {
    input.addEventListener("drop", (e: any) => {
      input.files = e.dataTransfer.files;
      const file = input.files[0];
      const fileName = file.name.split(".")[0];
      const fileType = file.name.split(".")[1];
      const dots = fileName.length > 6 ? "..." : ".";
      const name = `${fileName.substring(0, 6)}${dots}${fileType}`;
      input.previousElementSibling.textContent = name;
    });
  });
};
