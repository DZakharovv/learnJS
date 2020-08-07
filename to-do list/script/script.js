'use sctrict';

const todoControl = document.querySelector('.todo-control'),
    headerInput = document.querySelector('.header-input'),
    todoList = document.querySelector('.todo-list'),
    todoRemove = document.querySelector('.todo-remove'),
    todoCompleted = document.querySelector('.todo-completed');


const todoData = [];

const render = function () {
    todoList.textContent = '';
    todoCompleted.textContent = '';
    todoRemove.textContent = '';


    todoData.forEach(function (item) {
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

        const btnTodoRemove = li.querySelector('.todo-remove');

        btnTodoRemove.addEventListener('click', function (event) {
            event.closest();


            const todoRemove = {
                value: todoData.remove(li),
                // console.log('del')
            };
            render();
        });
    });
};

todoControl.addEventListener('submit', function (event) {
    event.preventDefault();

    const newTodo = {
        value: headerInput.value,
        completed: false
    };
    todoData.push(newTodo);
    render();
});

render();