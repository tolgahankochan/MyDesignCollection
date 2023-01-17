const dynamicIslandPill = document.querySelector(".dynamic-island .pill");
const dynamicIsland = document.querySelector(".dynamic-island");
const container = document.querySelector(".dynamic-island .container");

dynamicIslandPill.addEventListener("click", () => {
  dynamicIsland.classList.toggle("active");
  container.classList.toggle("active");
});