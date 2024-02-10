const title1 = document.getElementById('title')
title1.style.backgroundColor = 'green';

title1.getAttribute('id')
title1.getAttribute('className')
title1.setAttribute('class', 'heading test' )


title1.innerText //it will show all visible content
// 'DOM Learning on Chai or Code'

title1.textContent // it will show all visible or hidden content
'DOM Learning on Chai or Code Test Series'

title1.innerHTML // it will show all content inside of accessable element.
// 'DOM Learning on Chai or Code <span style="display: none;">Test Series</span>'

document.querySelector("h2")​
document.querySelector('#title')
document.querySelector('.heading')
document.querySelector("input[type= 'password' ]")


const myul = document.querySelector('ul')
const listitem1 = myul.querySelector('li')

​
listitem1.style.backgroundColor = 'yellow'
listitem1.style.backgroundColor = 'green'
listitem1.style.padding= '2rem'
listitem1.style.borderRadius= '1rem'
listitem1.innerText = 'Python'


const tempLiList = document.querySelectorAll('li')
tempLiList[1].style.color = 'green' // some features match with array.

const myh1 = document.querySelectorAll('h1')
myh1[0].style.color = 'green'


//uses of forEach () function 
const myul1 = document.querySelectorAll('li')
myul1.forEach(function (list) {
    list.style.color = 'green'
})


//here we will convert an html collection into array, so that we could use forEach () function... let's see!
const tempclassList = document.getElementsByClassName('list-items')
//below code won't work
// tempclassList.forEach(function (li) {
//     console.log(li)
// })
//for make it working just convert it into array
const convertedArray = Array.from(tempclassList) // done now you can use forEach() function
convertedArray.forEach(function (list) {
    list.style.color = 'orange'
})



//Work From Javascript wikipedia
const h3 = document.querySelectorAll('.mw-headline') // class mw-headline selected though querySelectorAll

h3.forEach(function (Head3) {
    Head3.style.color = 'red';
    Head3.style.backgroundColor = 'gray';
    Head3.style.padding = '1rem'
})
// undefined
h3.forEach(function (Head3) {
    Head3.style.color = 'red';
    Head3.style.backgroundColor = 'gray';
    Head3.style.padding = '1rem';
    Head3.innerText = 'Prince'
})
//here we learned how to take and manupulate values... and more concepts