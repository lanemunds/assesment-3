const cougs = (event)=>{
    event.preventDefault()
    alert("YESSIR!!!")
}
const utes = (event)=>{
    event.preventDefault()
    alert('LEAVE AND NEVER RETURN')
}


const favColor = (event)=>{
    event.preventDefault()
    alert('My favorite color is green')
}
const favPlace = (event)=>{
    event.preventDefault()
    alert('My favorite place is disneyland')
}
const favRit = (event)=>{
    event.preventDefault()
    alert('My favorite ritual is weekly 1 on 1 time with my sons')
}

const BYU = document.querySelector('#BYU')
const utah = document.querySelector('#Utah')
const color = document.querySelector('#color')
const ritual = document.querySelector('#ritual')
const place = document.querySelector('#place')



BYU.addEventListener('click', cougs)
utah.addEventListener('click', utes)
color.addEventListener('click', favColor)
ritual.addEventListener('click', favRit)
place.addEventListener('click', favPlace)