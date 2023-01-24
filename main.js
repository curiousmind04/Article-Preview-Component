const btn = document.querySelector(".btn");
const shareBtn = document.querySelector(".share-btn");
const desktopBtn = document.querySelector(".desktop-btn");
const user = document.querySelector(".user");
const share = document.querySelector(".share-section");
const svg = document.querySelector(".svg-path");
const bubble = document.querySelector(".bubble-container");

btn.addEventListener("click", () => {
  user.parentNode.classList.toggle("hide");
  share.parentNode.classList.toggle("open");
});

shareBtn.addEventListener("click", () => {
  user.parentNode.classList.toggle("hide");
  share.parentNode.classList.toggle("open");
});

desktopBtn.addEventListener("click", () => {
  svg.classList.toggle("toggle-svg");
  desktopBtn.classList.toggle("toggle-btn");
  bubble.classList.toggle("bubble-open");
});
