document.addEventListener("DOMContentLoaded", () => {
  const newTask = document.getElementById('new-task-description')
  const taskButton = document.getElementById('submit-button') 
  const taskList = document.getElementById('tasks')

  taskButton.addEventListener('click', event => { 
    event.preventDefault()
    taskList.innerHTML += `<li class="tasks">${newTask.value}</li>`
    newTask.value = ""
   })
  
});
