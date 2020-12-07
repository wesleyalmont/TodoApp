document.addEventListener('DOMContentLoaded', () => {

    const todoList = document.querySelector('.todo-list')
    const todoInput = document.querySelector('.todo-input')
    const status = document.querySelector('.status')

    document.addEventListener('click', (e) => {
        const el = e.target

        if (el.classList.contains('add')) {

            validateInputText(todoInput)
        }
        if (el.classList.contains('remove')) {
            removeFromList(el)
            console.log('tentando remover')
        }
    })

    function addToList(todoInput) {
        const li = document.createElement('li');
        const removeBtn = document.createElement('i')

        li.className = 'todo-item'
        removeBtn.className = 'remove fas fa-trash-alt';

        li.innerText = todoInput
        li.appendChild(removeBtn)
        todoList.appendChild(li)

    }

    function removeFromList(el) {
        el.parentNode.parentNode.removeChild(el.parentNode)
    }

    function validateInputText(todoInput) {
        if (todoInput.value) {
            addToList(todoInput.value)
            todoInput.value = ''

            status.classList.toggle('valid')
            status.innerText = 'Added'
            status.style.display = 'block'

        } else {
            status.classList.toggle('invalid')
            status.innerText = 'You need to type something!'
            status.style.display = 'block'
        }

        setTimeout(() => {
            status.classList.remove('valid')
            status.classList.remove('invalid')
            status.style.display = 'none';
        }, 2000);
    }

})