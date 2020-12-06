document.addEventListener('DOMContentLoaded', () => {

    const todoList = document.querySelector('.todo-list')
    const todoInput = document.querySelector('.todo-input')

    for ( let i = 0; i <= 10; i++){
        addToList(i)
    }

    document.addEventListener('click', (e) => {
        const el = e.target

        if (el.classList.contains('add')) {
            
            addToList(todoInput.value)
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
    
    function removeFromList(el){
        el.parentNode.parentNode.removeChild(el.parentNode)
    }
})
