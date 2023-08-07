let options = document.querySelectorAll(".option");
let habilities = document.querySelectorAll(".hability");

options.forEach((option, i) => {
  option.addEventListener("click", () => {
    options.forEach((option) => {
      option.classList.remove("actived");
    });
    habilities.forEach((hability) => {
      hability.classList.remove("actived");
    });
    option.classList.add("actived");
    habilities[i].classList.add("actived");
  });
});
