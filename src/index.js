document.addEventListener("DOMContentLoaded", () => {
  // your code here
    const form = document.getElementById('create-task-form')
    const allTasks = document.getElementById('tasks')
    const description = document.getElementById('new-task-description')


    form.addEventListener('submit', function(event){
      event.preventDefault()
      let li = document.createElement('li')
      let h5 = document.createElement('h5')
       h5.textContent= description.value 
      li.append(h5)
        allTasks.append(li)

      const deleteButton = document.createElement('button')
      deleteButton.innerHTML = "X"
      li.append(deleteButton)

      deleteButton.addEventListener('click',function(event){
            event.target.parentNode.remove()
      })

      const editButton = document.createElement('button')
      editButton.innerHTML ="edit"
      const editInput= document.createElement('input')
        editInput.type = "text"
        li.append(editButton)
        li.append(editInput)
   
      editButton.addEventListener('click', function(event){
      h5.textContent = editInput.value 
      })
      let priorityList = document.createElement(`select`)
      priorityList.innerHTML = "<option value=`high`>High</option> <option value=`medium`>Medium</option> <option value=`low`>Low</option> "
     li.appendChild(priorityList)

    })






});















































// const form = document.getElementById("create-task-form")

// form.addEventListener("submit", function(event){
//   event.preventDefault()

//   let li = document.createElement("li")
//   let pTag = document.createElement(`p`)
//   li.appendChild(pTag)
//   const textArea = document.getElementById("new-task-description").value

//   const task = document.getElementById("tasks")

//   pTag.textContent = textArea 
//   task.appendChild(li)

//   let deleteButton = document.createElement("button")
//   deleteButton.innerHTML="x"
//   li.appendChild(deleteButton)
//   deleteButton.addEventListener("click",function(event){
//     event.target.parentNode.remove()
//   })

//   let editButton = document.createElement("button")

//   editButton.textContent = "edit"

//   li.appendChild(editButton)

//   editButton.addEventListener("click", function(event){
//     console.log(event.target.parentNode)
//     let thisTask = event.target.parentNode.getElementsByTagName(`p`)[0]
//     let userInput = prompt("What do you want to change this to?")
//     thisTask.textContent = userInput
//   });

//   let priorityList = document.createElement(`select`)
//   priorityList.innerHTML = "<option value=`high`>High</option> <option value=`medium`>Medium</option> <option value=`low`>Low</option> "
//   li.appendChild(priorityList)


// }); 
