const numbers = document.querySelectorAll('[data-number]');
const clear = document.querySelector('[data-clear]');
const operator = document.querySelectorAll('[data-operator]');
const deleteNumber = document.querySelector('[data-delete]');
const result = document.querySelector('[data-result]');
const displayResult = document.querySelector('.current-operant');
const history = document.querySelector('.previous-operant');
let number1 = "";
let number2 = 0;
let operatorUsed;
let answer;

clear.addEventListener('click', ()=>{
    displayResult.innerText = 0;
    history.innerText = "";
    number1 = "";
    number2 = 0;
})

numbers.forEach(el => {
    el.addEventListener('click', ()=> {
        number1 = number1 + el.innerText;
        displayResult.innerText = number1;
    })
})

deleteNumber.addEventListener('click', () => {
    number1 = number1.slice(0,number1.length - 1);
    if(number1 == ""){
        displayResult.innerText = 0;
    }else{
        displayResult.innerText = number1;
    }
})

operator.forEach((el) => {
    el.addEventListener('click', () => {
        //number2 = number2 + parseFloat(number1);
        operatorUsed = el.innerText;
        doMath();
        history.innerText = number2 + operatorUsed;
        number1 = "";
        displayResult.innerText = 0;
        
    })
})

result.addEventListener('click', () => {
    answer = number2;
    doMath();

    displayResult.innerText = number2.toFixed(2);
    if(number2 === ""){
        history.innerText = number1;
    }else{
        history.innerText = ` ${answer}${operatorUsed}${parseFloat(number1)} `;
    }
    number1 = "";
    number2 = 0;
})

function doMath(){
    switch(operatorUsed){
        case '+': 
            number2 = number2 + parseFloat(number1);
            break;

        case '-' :
            number2 = number2 - parseFloat(number1);
            break; 
            
        case '*' :
            if(number2 === 0){
                number2 = 1;
            }
            number2 = number2 * parseFloat(number1);
            break;  

        case '÷': 
            if(number2 === 0){
                number2 = 1;
            }
            number2 = number2 / parseFloat(number1);
            break; 

        default:
            number2 = number1
            break;
    }
}