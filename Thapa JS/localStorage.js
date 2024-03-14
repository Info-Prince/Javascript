const addData = document.querySelector ('.addData')
const getData = document.querySelector ('.getData')
const deleteData = document.querySelector ('.deleteData')

addData.addEventListener('click', (eObj) => {
    localStorage.setItem('NewObj', JSON.stringify({username:'prince', Location:'patna', course:'DSA', price:'999'}))
    console.log(addData);
})

getData.addEventListener('click' , (e) => {
    const retrievedData = JSON.parse(localStorage.getItem("NewObj"))
    console.log `Retrieved data from localStorage ${retrievedData}`; // here don't use small braces ()or else you will get unusual output
})

deleteData.addEventListener( 'click', (e) => {
    localStorage.removeItem('NewObj')

})