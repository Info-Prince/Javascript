const targetElem = document.getElementsByClassName('calculator-content');

const inputVal = document.querySelector('input');
let result = "";
// console.log(inputVal);

document.addEventListener('keydown', (event) => {
    const operators = ['+', '-', '*', '/'];
    
    event.preventDefault();

    if(event.key === "Enter") {
        let inputData = inputVal.value;
        result = inputData;
        result = eval(result);
        
        if(Number.isInteger(result)) 
        inputVal.value = Number(result);
        else 
        inputVal.value = (Number(result).toFixed(2))
    }
    else if (operators.includes(event.key)){
        let lastElem = inputVal.value.slice(-1);
        
        if(operators.includes(lastElem)) {
            inputVal.value = inputVal.value.slice(0,-1) + event.key;
        }
        else 
        inputVal.value += event.key;
    }
    else if (!isNaN(event.key) || event.key === '.') {
        inputVal.value += event.key;
    }
    else if (event.key === 'Backspace') {
        inputVal.value = inputVal.value.slice(0,-1);
    }
    else if (event.key === 'Escape')
        inputVal.value = "";
})



const buttons = document.querySelectorAll('.calculator-content');
console.log(buttons);

buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
        currelem = (event.target).innerText;
         
        if(currelem == 'C')
            inputVal.value = "";
        else if (currelem === '=') {
            let inputData = inputVal.value;
            result = inputData;
            result = eval(result);
            
            if(Number.isInteger(result)) 
            inputVal.value = Number(result);
            else 
            inputVal.value = (Number(result).toFixed(2))
        }
        else {
            const operators = ['+', '-' ,'/' ,'*'];
            let lastElem = inputVal.value.slice(-1);
            
            if(operators.includes(currelem) && operators.includes(lastElem)) {
                inputVal.value = inputVal.value.slice(0, -1) + currelem;
            } 
            else {
                inputVal.value += currelem;
                console.log(inputVal.value);    
            }
        }    
        
    })
})