import { saveTask } from './firebase.js';

const taskForm = document.getElementById('task-form');
console.log("taskForm", taskForm)
taskForm.addEventListener('submit', async(event) => {
    /* El tipo 'submit' es una accion que puede demorar, por eso le colocamos async() */
    event.preventDefault();
    const title = taskForm['task-title'].value
    const description = taskForm['task-description'].value
    const quantity = Number(taskForm['task-quantity'].value)
    console.log("title:", title)
    console.log("description:", description)
    console.log('quantity:', quantity)

    try {
        await saveTask(title, description, quantity)
        console.log("Tarea guardada")
        taskForm.reset()
    }
    catch (error) {
        console.log("Error", error.message)
    }
})