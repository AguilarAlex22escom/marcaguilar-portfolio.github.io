let burgerButton = document.querySelector(".burger-button");
let menuOptions = document.querySelector(".responsive-menu");
let header = document.querySelector("header");

// let links = document.querySelectorAll(".responsive-menu ul li a");
burgerButton.addEventListener("click", () => {
  burgerButton.classList.toggle("actived");
  menuOptions.classList.toggle("actived");
  header.classList.toggle("actived");
});
