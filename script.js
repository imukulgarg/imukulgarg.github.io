const heading = document.querySelector('.heading3');
const popup = document.querySelector('.popup_container');
const internal_popup = document.querySelector('.popup');
const btn = document.querySelector('.popup-btn');
const close = document.querySelector('.close');
const burger = document.querySelector('.button');
const nav_list = document.querySelector('.nav_list');
const links = document.querySelectorAll('.nav_list li');
const icon = document.querySelector('.button i');
const html = document.querySelector('html');

window.addEventListener('DOMContentLoaded', () => {
    const text = "Full Stack Developer in Making!!      ";
    heading.style.borderRight = 'white 1px solid'
    let index = 1;
    setInterval(()=>{
        heading.innerText = text.slice(0,index);
        index++;
        if(index === text.length){
            index =1;
        }    
    },200);
})

btn.addEventListener('click', () => {
    popup.classList.toggle('active');
    internal_popup.classList.toggle('popup_animate');
})

close.addEventListener('click', () => {
    popup.classList.toggle('active');
    internal_popup.classList.toggle('popup_animate');
})

burger.addEventListener('click', () => {
    change();
    html.classList.toggle('scroll');
})

links.forEach(el => {
    el.addEventListener('click', () => {
        change();
        html.classList.remove('scroll');
    })
})

function change() {
    nav_list.classList.toggle('nav-active');
    burger.classList.toggle('button-active');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-times');
}

