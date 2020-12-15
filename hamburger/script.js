const button = document.querySelector(".button");
const navBar = document.querySelector(".nav-bar");

button.addEventListener("click", function () {
  console.log("hello");
  navBar.classList.toggle("active");
  button.classList.toggle("button-active");
});
