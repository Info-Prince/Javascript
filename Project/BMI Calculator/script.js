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
        compare(bmi);
    }

})

function compare (bmi) {
    if (bmi < 18.6) {
        const underWeight = document.querySelector('.underWeight')
        underWeight.innerHTML = `<p style= "padding: 0.5rem 0.7rem;
        font-size: 1.2rem;
        background-color: #383835;
        ">Under Weight = Less than 18.6</p>`;
    } else if (bmi >=18.6 && bmi < 24.9) {
        const normalRange = document.querySelector('.normalRange')
        normalRange.innerHTML = `<p style= "padding: 0.5rem 0.7rem;
        font-size: 1.2rem;
        background-color: #383835;
        ">Normal Range = 18.6 and 24.9</p>`
    } else if (bmi >= 24.9) {
        const overWeight = document.querySelector('.overWeight')
        overWeight.innerHTML = `<p style= "padding: 0.5rem 0.7rem;
        font-size: 1.2rem;
        background-color: #383835;
        ">Overweight = Greater than 24.9</p>`
    }
}