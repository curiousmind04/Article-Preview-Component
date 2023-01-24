const btn = document.querySelector(".btn");
const shareBtn = document.querySelector(".share-btn");
const user = document.querySelector(".user");
const share = document.querySelector(".share-section");
const svg = document.querySelector(".svg-path");

btn.addEventListener("click", () => {
  user.parentNode.classList.toggle("hide");
  share.parentNode.classList.toggle("open");
  svg.classList.toggle("toggle-svg");
  btn.classList.toggle("toggle-btn");
});

shareBtn.addEventListener("click", () => {
  user.parentNode.classList.toggle("hide");
  share.parentNode.classList.toggle("open");
  svg.classList.toggle("toggle-svg");
  btn.classList.toggle("toggle-btn");
});
