let taskId = null
let nextId = 1
let taskList= [];

document.getElementById('add-btn').addEventListener('click', e => {
    e.preventDefault()
    add()
    renderList()
})
document.getElementById('remove-btn').addEventListener('click', e => {
    e.preventDefault()
    remove()
    renderList()
})
document.getElementById('edit-btn').addEventListener('click', e => {
    e.preventDefault()
    edit()
    renderList()
})

function renderList() {
    let ulElement = document.getElementById('task-list')
    ulElement.innerHTML = ''
    taskList.forEach(task => {
        let liElement = document.createElement('li')
        ulElement.appendChild(liElement)
        liElement.dataset.id = task.id;
        liElement.className = 'task-card'
        liElement.innerHTML = 
            `<p>Descrição: ${task.description}</p>
            <p class="completed">Completa: ${task.markAsCompleted ? 'Sim' : 'Não'}</p>
            <p class="date">Data: ${task.date}</p>`;
        liElement.addEventListener('click', e => {
            taskId = Number(e.currentTarget.dataset.id)

            document.querySelectorAll('.task-card').forEach(card => {
                card.classList.remove('clicked')
            })
            liElement.classList.add('clicked')
        })
        
    })

}

function add() {
    const  DESCRIPTION = document.getElementById('inputDescription').value
    const CHECKBOX = document.getElementById('checkBoxMarkAsComplete').checked
    const DATE = document.getElementById('inputDate').value
    if(DESCRIPTION === ''|| DATE === ''){
        alert('sem informaçôes')
    }
    else {
        taskList.push({id: nextId++, description: DESCRIPTION, markAsCompleted: CHECKBOX, date: DATE})
    }
}
function remove() {
    if(taskId !== null){
        taskList = taskList.filter(task => task.id !== taskId)
    }

    taskId = null
}
function edit() {
    console.log(taskId)
    const NEW_DESCRIPTION = document.getElementById('inputDescription').value
    const NEW_CHECKBOX = document.getElementById('checkBoxMarkAsComplete').checked
    const NEW_DATE = document.getElementById('inputDate').value

    if(taskId !== null) {
        taskList.forEach(task => {
            if(taskId === task.id) {
                task.description = NEW_DESCRIPTION
                task.markAsCompleted = NEW_CHECKBOX
                task.date = NEW_DATE
            }
        })
    }
    taskId = null
}