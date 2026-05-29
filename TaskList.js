
const BUTTON_ADD = document.getElementById('add-btn')

const TASK_LIST= [];

document.getElementById('add-btn').addEventListener('click', e => {
    e.preventDefault()
    add()
    renderList()
})

function renderList() {
    const UL = document.getElementById('task-list')
    UL.innerHTML = ''
    TASK_LIST.forEach(task => {
        const LI = document.createElement('li')
        UL.appendChild(LI)
        LI.dataset.id = task.id;
        LI.className = 'task-card'
        LI.innerHTML = 
            `<p>Descrição: ${task.description}</p>
            <p class="completed">Completa: ${task.markAsCompleted ? 'Sim' : 'Não'}</p>
            <p class="date">Data: ${task.date}</p>`;
        LI.addEventListener('click', e => {
            const id = e.currenttarget.dataset.id
            console.log(id)
        })
    })

}

function add() {
    const  DESCRIPTION = document.getElementById('inputDescription').value
    const CHECKBOX = document.getElementById('checkBoxMarkAsComplete').checked
    const DATE = document.getElementById('inputDate').value
    TASK_LIST.push({id: TASK_LIST.length + 1, description: DESCRIPTION, markAsCompleted: CHECKBOX, date: DATE})
    
}