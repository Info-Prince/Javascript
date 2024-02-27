const form = document.querySelector('form');
//this usecase will give you empty
// const height = form.querySelector('#height')
// const weight = form.querySelector('#width')

form.addEventListener ('submit', (eventObj) => {
    eventObj.preventDefault();
    // console.log(eventObj);
    // console.log(eventObj.target);
    const height = parseInt(form.querySelector('#height').value);
    const weight = parseInt(form.querySelector('#weight').value);
    const results = document.querySelector('.resultBtn')
    console.log(results);

    if ( height === "" || height < 0 || isNaN(height)) {
        results.innerHTML = `height ${height}`;
    } else if ( weight === "" || weight < 0 || isNaN(weight)) {
        results.innerHTML = `weight ${weight}`
    } else {
        var bmi = (weight / (( height * height ) / 10000)).toFixed(2);
        results.innerHTML = `<span>${bmi}</span>`
    }

    //* showing range
    // const weightGuide = document.querySelectorAll('.weightGuide');
    // const underWeight = document.querySelector('#underWeight');
    // const normalWeight = document.querySelector('#normalRange');
    // const overWeight = document.querySelector('#overWeight');
    const showMyRange = document.querySelector('.showMyRange');

    if (bmi < 18.6) {
        showMyRange.innerHTML = `${bmi} BMI UnderWeighted`  
    } else if (bmi >= 18.6 && bmi <24.9) {
        showMyRange.innerHTML = `${bmi} BMI Normal Weight`
    } else if (bmi > 24.9) {
        showMyRange.innerHTML = `${bmi} BMI OverWeight`
    
    }
    // weightGuide.forEach( (curElem) => {
    //     const weightGuidePara = curElem.querySelectorAll('.rangeOfWeight');
    //     // console.log(typeof weightGuidePara);
        
    //     weightGuidePara.forEach ( (elem) => {
    //         const weightGuideId = elem.id;
    //     })
    // })

})