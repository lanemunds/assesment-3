console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('The form has been submitted successfully');
}
const catFunc = (event)=>{
	event.preventDefault()
	alert('Looking Good!!')
}

let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);
let cat = document.querySelector('#cat')
cat.addEventListener('mouseover',catFunc)