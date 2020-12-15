const button = document.querySelector(".button");
const heading = document.querySelector(".heading");
const para = document.querySelector(".paragraph");

button.addEventListener("click", () => {
  button.classList.toggle("active2");
  document.body.classList.toggle("active");
});
