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

const getDateNow = () =>{
        const date = new Date()
        
        const day = String(date.getDate()).padStart(2, '0')
        const month = String(date.getMonth() + 1).padStart(2, '0') 
        const year = date.getFullYear()
    
        let hours = date.getHours()
        const minutes = String(date.getMinutes()).padStart(2, '0')
        const period = hours >= 12 ? 'P.M.' : 'A.M.'
    
        hours = hours % 12 || 12 
        const formattedHours = String(hours).padStart(2, '0')

        return `${day}-${month}-${year} ${formattedHours}:${minutes} ${period}`
    
}

const updateClock = () => {
    const dateNow = new Date()
    
    const hour   =  String (dateNow.getHours()).padStart(2 , '0')
    const minute =  String (dateNow.getMinutes()).padStart(2 , '0')
    const second =  String (dateNow.getSeconds()).padStart(2 , '0')

    const hourHtml   = document .getElementById("hours")
    const minuteHtml = document .getElementById("minutes")
    const secondHtml = document .getElementById("seconds")

    hourHtml.textContent = hour
    minuteHtml.textContent = minute
    secondHtml.textContent = second
}

setInterval(updateClock, 1000)

 updateClock()

const appendElementToList = (todoItemVar) =>{
    
 const element = document.createElement("li")
 const conText = document.createElement("div")
 const text = document.createElement("span")
 const line = document.createElement("p")
 const date = document.createElement("span")
 const conBtn = document.createElement("div")
 const delBtn = document.createElement("button")
 const comBtn = document.createElement("button")

 const dateNow = new Date()

 delBtn.textContent = "Delete"
 line.textContent   = "|"

 text.textContent = todoItemVar
 date.textContent = getDateNow()

 conText.appendChild(text)
 conText.appendChild(line)
 conText.appendChild(date)
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
/*
//Nombre de funciones normales
function addTodo(){
    console.log("Dentro de la funcion")
}

//Funcion guardada en una varible
const addTodo = function(){

}*/

//Arrow functioncs (Funciones flecha)

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

