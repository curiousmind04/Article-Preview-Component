const btn = document.querySelector(".btn");
const shareBtn = document.querySelector(".share-btn");
const share = document.querySelector(".share-section");
const svg = document.querySelector(".svg-path");

btn.addEventListener("click", () => {
  share.parentNode.classList.toggle("open");
  svg.classList.toggle("toggle-svg");
  btn.classList.toggle("toggle-btn");
});

shareBtn.addEventListener("click", () => {
  share.parentNode.classList.toggle("open");
  svg.classList.toggle("toggle-svg");
  btn.classList.toggle("toggle-btn");
});
