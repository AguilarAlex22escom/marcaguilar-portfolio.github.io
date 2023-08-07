let burgerButton = document.querySelector(".burger-button");
let menuOptions = document.querySelector(".responsive-list");

// let links = document.querySelectorAll(".responsive-menu ul li a");
burgerButton.addEventListener("click", () => {
  burgerButton.classList.toggle("actived");
  menuOptions.classList.toggle("actived");
});
