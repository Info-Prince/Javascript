const calculate = document.querySelector('.submitBtn')
const result = document.querySelector ('.result')

calculate.addEventListener ('click', (e) => {
    e.preventDefault();
    const height = parseInt(document.querySelector ('#height').value); 
    const weight = parseInt(document.querySelector ('#weight').value);

    if( height === '' || height < 0 || isNaN(height)) {
        result.innerHTML = `Incorrect Height Value ❎`;
    } else if (weight === '' || weight < 0 || isNaN(weight)) {
        result.innerHTML = `Incorrect Weight Value ❎`;
    } else {
        const bmi = (weight / (( height * height ) / 10000)).toFixed(2);
        console.log(bmi)
        result.innerHTML = `${bmi}`;
    }
    
})