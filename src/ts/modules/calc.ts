export const calc = ({
  size,
  material,
  options,
  promocode,
  result,
}: {
  size: string;
  material: string;
  options: string;
  promocode: string;
  result: any;
}) => {
  const sizeBlock = document.querySelector<HTMLInputElement>(size);
  const materialBlock = document.querySelector<HTMLInputElement>(material);
  const optionsBlock = document.querySelector<HTMLInputElement>(options);
  const promocodeBlock = document.querySelector<HTMLInputElement>(promocode);
  const resultBlock = document.querySelector(result);

  

  const calcFunc = () => {
   const sum = Math.round(
      +sizeBlock.value * +materialBlock.value + +optionsBlock.value
    );

    if (sizeBlock.value == "" || materialBlock.value == "") {
      resultBlock.textContent =
        "Пожалуйста, выберите размер и материал картины";
    } else if (promocodeBlock.value === "IWANTPOPART") {
      resultBlock.textContent = Math.round(sum * 0.7);
    } else {
      resultBlock.textContent = sum;
    }
  };

  sizeBlock.addEventListener("change", calcFunc);
  materialBlock.addEventListener("change", calcFunc);
  optionsBlock.addEventListener("change", calcFunc);
  promocodeBlock.addEventListener("input", calcFunc);
};
