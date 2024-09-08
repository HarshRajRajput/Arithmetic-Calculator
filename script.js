let input = document.querySelector("input");
let button = document.querySelectorAll("button");

let ImptyInput = "";
button.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.textContent == "=") {
      ImptyInput = eval(ImptyInput);
      input.value = ImptyInput;
    } else if (e.target.textContent == "AC") {
      ImptyInput = "";
      input.value = ImptyInput;
    } else if (e.target.textContent == "DEL") {
      ImptyInput = ImptyInput.slice(0, ImptyInput.length - 1);
      input.value = ImptyInput;
    } else {
      ImptyInput = ImptyInput + e.target.textContent;
      input.value = ImptyInput;
    }
  });
});
