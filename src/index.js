document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector("form")
  let input =document.getElementById("new-task-description","list","tasks")
  form.addEventListener("submit",(e) => {
    e.preventDefault()
    if (input.value.trim() === ""){
      alert("Please enter a task description.")
      return;
    }
    let par = document.createElement("p")
    par.textContent = input.value 
    let list = document.getElementById("list")
    list.appendChild(par)
    input.value = ""
  })
});
