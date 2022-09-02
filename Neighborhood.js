const restaurants = ['Blackbear Diner', 'Sushi House' , 'Curry Pizza']

const random = (event)=>{
    event.preventDefault()
let randomRes = Math.floor(Math.random() * restaurants.length)

alert(restaurants[randomRes])}

const chooseR = document.querySelector('#Choose')
chooseR.addEventListener('click', random)