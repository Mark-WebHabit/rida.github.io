const form = document.querySelector("form");
const button = form.querySelector("button");
const input = form.querySelector("input");
const absolute = document.querySelector(".absolute");
const audio = document.querySelector("audio");

window.addEventListener("DOMContentLoaded", () => {
  triggerColorChange();

  input.addEventListener("input", () => {
    triggerColorChange();
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (input.value == "") {
      return;
    }

    absolute.style.animation = "animate 1s linear 1 forwards";
    absolute.style.animationDelay = "0.5s";
    audio.play();
  });
});

function triggerColorChange() {
  if (input.value != "") {
    const replaced = button.classList.replace("btn-danger", "btn-success");
    if (!replaced) {
      button.classList.add("btn-success");
    }
  } else {
    const replaced = button.classList.replace("btn-success", "btn-danger");
    if (!replaced) {
      button.classList.add("btn-danger");
    }
  }
}
