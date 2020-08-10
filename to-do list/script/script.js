'use sctrict';

const todoControl = document.querySelector('.todo-control'),
    headerInput = document.querySelector('.header-input'),
    todoList = document.querySelector('.todo-list'),
    todoItem = document.querySelector('.todo-item'),
    // todoContainer = document.querySelector('.todo-container'),
    todoCompleted = document.querySelector('.todo-completed');

const todoData = localStorage.getItem('todoData') ? 
JSON.parse(localStorage.getItem('todoData')) : [];

const addToStorage = function() {
    localStorage.setItem('todoData', JSON.stringify(todoData));
};
    


const render = function () {
    todoList.textContent = '';
    todoCompleted.textContent = '';



    todoData.forEach(function (item, index) {
        const li = document.createElement('li');
        li.classList.add('todo-item');

        li.innerHTML = '<span class="text-todo">' + item.value + '</span>' +
            '<div class="todo-buttons">' +
            '<button class="todo-remove"></button>' +
            '<button class="todo-complete"></button>' +
            '</div>';
        if (item.completed) {
            todoCompleted.append(li);
        } else {
            todoList.append(li);
        }



        const btnTodoComplete = li.querySelector('.todo-complete');

        btnTodoComplete.addEventListener('click', function () {
            item.completed = !item.completed;
            render();
            
        });
        addToStorage();
        

        const btnTodoRemove = li.querySelector('.todo-remove');

        btnTodoRemove.addEventListener('click', function (event) {
            // let target = event.target;
            todoData.splice(index, 1);
            render();
        });
        addToStorage();
    });
};

todoControl.addEventListener('submit', function (event) {
    event.preventDefault();

    let newTodo = {
        value: headerInput.value.trim(),
        completed: false,
    }
    if (newTodo.value !== '') {
        todoData.push(newTodo);
        render(); 
        headerInput.value = '';
    } 
    addToStorage();
});



render();



