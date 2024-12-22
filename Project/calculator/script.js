const targetElem = document.getElementsByClassName('calculator-content');
// console.log(targetElem);

const inputVal = targetElem[0];
let result = "";
console.log(inputVal);

document.addEventListener('keydown', (event) => {
    
    
    if(event.key === "Enter") {
        let inputData = inputVal.value;
        result = inputData;
        result = eval(result);
        console.log(result);
        
        inputVal.value = (Number(result)).toPrecision(2);
    }
    

})