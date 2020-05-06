const all = JSON.parse(localStorage.getItem('all')) || [];


window.onload = () =>{
	render();
	const form = document.getElementById('form');
	form.onsubmit = (e) =>{
		const inputText = document.getElementById('inputText');
		const text = inputText.value;
		e.preventDefault();
		inputText.value = '';
		if (text != '') {
			all.push(text);
			updateStorage();
			render();
			inputText.classList.remove('is-invalid');
			inputText.className += " is-valid";	
		}else{
			inputText.classList.remove('is-valid');
			inputText.className += " is-invalid";
		}
	}
}

const render = () => {
	const list = document.getElementById('list');
	/* La funcion .map hace un proceso parecido al for . . 

		list.innerHTML = '';
		for (let i = 0; i < all.length; i++) {
			list.innerHTML += '<li>'+ all[i] +'</li>';
		}
	*/
	const allTemplade = all.map(a => '<div class="alert alert-light m-0 mt-1" role="alert">'+ a +'<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>');
	list.innerHTML =  allTemplade.join('');
	const elementos = document.querySelectorAll('#list div');
	elementos.forEach((elemento,i) =>{
		elemento.addEventListener('click', () =>{
			// Eliminar elementos del html
			elemento.parentNode.removeChild(elemento);
			// Eliminar elementos del arreglo
			all.splice(i,1);
			updateStorage();
			render();
		})
	})
}
const updateStorage = () =>{
	const allString = JSON.stringify(all);
	localStorage.setItem('all',allString);
}