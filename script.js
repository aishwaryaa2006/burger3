const menuBtn = document.querySelector(".menu-btn");
const navList = document.querySelector("nav ul");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("active");
  navList.classList.toggle("active");
});
