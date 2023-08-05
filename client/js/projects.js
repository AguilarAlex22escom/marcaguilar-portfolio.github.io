let overviewBox = document.querySelector(".projects-overview");
let overviewCard = overviewBox.querySelectorAll(".overview");

document.querySelectorAll(".projects .project").forEach((project) => {
  project.onclick = () => {
    overviewBox.style.display = "flex";
    let name = project.getAttribute("data-name");
    overviewCard.forEach((overview) => {
      let target = overview.getAttribute("data-target");
      if (name == target) {
        overview.classList.add("actived");
      }
    });
  };
});

overviewCard.forEach(buttonX => {
  buttonX.querySelector(".fa-solid").onclick = () => {
    buttonX.classList.remove("actived");
    overviewBox.style.display = "none";
  };
});
