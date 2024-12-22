const targetElem = document.getElementsByClassName('calculator-content');
// console.log(targetElem);

const inputVal = targetElem[0];
// console.log(inputVal);

document.addEventListener('keydown', (event) => {
    
    const inputData = inputVal.value;
    if(event.key === "Enter") {
        for(let i = 0; i<inputData.length; i++) {
            
        }
    }
})