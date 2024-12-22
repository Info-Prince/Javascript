const targetElem = document.getElementsByClassName('calculator-content');

const inputVal = document.querySelector('input');
let result = "";
// console.log(inputVal);

document.addEventListener('keydown', (event) => {
        
    if(event.key === "Enter") {
        let inputData = inputVal.value;
        result = inputData;
        result = eval(result);
        console.log(result);
        
        inputVal.value = (Number(result)).toFixed(2);
    }
})

const buttons = document.querySelectorAll('.calculator-content');
console.log(buttons);

buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
        currelem = (event.target).innerText;
        console.log(currelem);
        
        if(currelem == 'C')
            inputVal.value = "";
        else if (currelem === '=') {
            let inputData = inputVal.value;
            result = inputData;
            result = eval(result);

            inputVal.value = Number(result);
        }
        else {
            inputVal.value += currelem;
        }    

    })
})