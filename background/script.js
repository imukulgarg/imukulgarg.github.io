const button = document.querySelector(".button");

button.addEventListener("click", () => {
  let val1 = Math.floor(Math.random() * 255);
  let val2 = Math.floor(Math.random() * 255);
  let val3 = Math.floor(Math.random() * 255);
  document.body.style.backgroundColor = `rgb(${val1},${val2},${val3})`;
});
