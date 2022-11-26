const inputs = document.querySelectorAll(".controls input");

function changehandler() {
  const suffix = this.dataset.sizing || "";
  document.body.style.setProperty(`--${this.name}`, this.value + suffix);
}

inputs.forEach((input) => input.addEventListener("change", changehandler));
inputs.forEach((input) => input.addEventListener("mousemove", changehandler));
