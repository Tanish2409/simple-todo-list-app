const todoInput = document.querySelector('.todo-input');
const inputBtn = document.querySelector('.input-btn');
const todoList = document.querySelector('.todo-list');

function addTodo(e) {
	e.preventDefault(); //To prevent the page from reloading after submitting

	const todoItem = document.createElement('div');
	todoItem.classList.add('todo-item', 'fade-in');
	// todoItem.classList.add('fade-in');

	todoItem.innerHTML = `
    <li>${todoInput.value}</li>
    <button class="todo-btn complete-btn">
		<i class="fas fa-check"></i>
	</button>
    <button class="todo-btn delete-btn">
        <i class="fas fa-trash"></i>
    </button>
    `;

	todoList.appendChild(todoItem);

	todoInput.value = '';
}

const performAction = (e) => {
	const targetElem = e.target; //Get the button which user clicks
	const parentElem = targetElem.parentElement; //Get the parent element of that button

	//check to see which button did the user click

	if (e.target.classList[1] === 'complete-btn') {
		parentElem.classList.toggle('completed');
	} else if (e.target.classList[1] === 'delete-btn') {
		parentElem.classList.remove('fade-in');
		parentElem.classList.add('fade-out');

		parentElem.addEventListener('animationend', () => {
			parentElem.remove();
		});
	}
};

inputBtn.addEventListener('click', addTodo);
todoList.addEventListener('click', performAction);
