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
        const bmi = (weight / (( height * height ) / 10000)).toFixed(2);
        results.innerHTML = `<span>${bmi}</span>`
    }

    //showing range
    const weightGuide = document.querySelectorAll('.weightGuide');
    const underWeight = document.querySelector('#underWeight');
    const normalWeight = document.querySelector('#normalRange');
    const overWeight = document.querySelector('#overWeight');
    weightGuide.forEach( (curElem) => {
        const weightGuidePara = curElem.querySelectorAll('.rangeOfWeight');
        // console.log(typeof weightGuidePara);
        
        weightGuidePara.forEach ( (elem) => {
            const weightGuideId = elem.id;
            if (weightGuideId === 'underWeight') {
                underWeight.innerHTML = 'You are underweighted';
            } else if (weightGuideId === 'normalRange') {
                normalWeight.innerHTML = "You falls under normal weight";
            } else if (weightGuideId === 'overWeight') {
                overWeight.innerHTML = 'You are Overweighted';
            }
        })
    })

})