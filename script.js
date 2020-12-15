const heading = document.querySelector('.heading3');
const popup = document.querySelector('.popup_container');
const internal_popup = document.querySelector('.popup');
const btn = document.querySelector('.popup-btn');
const close = document.querySelector('.close');

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
    },400);
})

btn.addEventListener('click', () => {
    popup.classList.toggle('active');
    internal_popup.classList.toggle('popup_animate');
})

close.addEventListener('click', () => {
    popup.classList.toggle('active');
    internal_popup.classList.toggle('popup_animate');
})

