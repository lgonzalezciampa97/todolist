const toDos = [];

const render = () => {
	const todoList = document.getElementById('todo-list')

		//con uso de map y join
		const toDosTemplate = toDos.map(t => '<li>' + t +'</li>')
		todoList.innerHTML = toDosTemplate.join('');


		const elementos = document.querySelectorAll('#todo-list li')
		elementos.forEach((elemento , i) => {
			elemento.addEventListener('click',() =>{
				elemento.parentNode.removeChild(elemento)
				toDos.splice(i,1)
				render()
			})
		})
		//con uso de for
		// todoList.innerHTML = '';
		// for(let i = 0 ; i < toDos.length ; i++){
		// 	todoList.innerHTML += '<li>' + toDos[i] + '</li>';
		// }
	}

	window.onload = () => {
		const form = document.getElementById('todo-form');
		form.onsubmit = (e) => {
			e.preventDefault();
			const todo = document.getElementById('todo');
			const todoText = todo.value;
			todo.value = ""
			toDos.push(todoText);
			render()
		
	}
}
