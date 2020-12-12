const heading = document.querySelector('.heading3');

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

