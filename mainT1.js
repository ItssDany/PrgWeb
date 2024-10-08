const inputVar = document.getElementById("to-do__input")
const buttonVar = document.getElementById("add__btn")
const todoListVar = document.getElementById("to-do__list")

document.addEventListener("DOMContentLoaded", () =>{
    const todos = JSON.parse(localStorage.getItem("todos")) || []
      
      todos.forEach(element =>{
        return appendElementToList(element)
      });
})

const validateInput = (todoItemVar) =>{
    if(todoItemVar.trim() === ""){
        alert("No puedes registrar un todo vacio")
        return false
    }  
    return true
}

const editTodo = (spanElement, liElement) => {
    spanElement.addEventListener("dblclick", () =>{
        const inputItem = document.createElement("input")
        inputItem.type = "text"
        inputItem.value = spanElement.textContent
        liElement.replaceChild(inputItem, spanElement)

        inputItem.addEventListener("keypress", (event)=>{
            if(event.key=== "Enter"){
                if(!validateInput(inputItem.value)){
                    return
                }
                spanElement.textContent = inputItem.value
                liElement.replaceChild(spanElement, inputItem)

            }
        })
    })
}


const appendElementToList = (todoItemVar) =>{
    
 const element = document.createElement("li")
 const conText = document.createElement("div")
 const text = document.createElement("span")
 const conBtn = document.createElement("div")
 const delBtn = document.createElement("button")
 const comBtn = document.createElement("button")

 delBtn.textContent = "Delete"
 text.textContent = todoItemVar

 conText.appendChild(text)
 conBtn.appendChild(comBtn)
 conBtn.appendChild(delBtn)

 element.appendChild(conText)
 element.appendChild(conBtn)

 comBtn.addEventListener("click", () => {
    element.classList.toggle("completed")

 })

 delBtn.addEventListener("click", () =>{
    element.remove()
 })
 
 editTodo(text, conText)

 todoListVar.appendChild(element)
}

const addTodo = () =>{
    const todos = []
 const todoItemVar = inputVar.value
 
 if (!validateInput(todoItemVar)) return
 appendElementToList(todoItemVar)
 
 todos.push("Elemento 1")
 todos.push("Elemento 2")
 todos.push("Elemento 3")


 localStorage.setItem("todos",JSON.stringify(todos))
 
 inputVar.value = ""

}

buttonVar.addEventListener("click", addTodo)

