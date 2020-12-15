const images = document.querySelector(".imgs");
const img = document.querySelectorAll("img");

x = 0;

function run() {
  x++;

  if (x > img.length - 1) {
    x = 0;
  }

  images.style.transform = `translateX(${-x * 900}px)`;
  console.log("tranform");
}
console.log(img);

setInterval(run, 3000);
