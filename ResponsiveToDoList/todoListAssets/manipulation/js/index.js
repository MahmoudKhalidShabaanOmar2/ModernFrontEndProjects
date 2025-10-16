let addedButton = document.getElementById("addedButton");
// console.log(addedButton);
function addedTasksIntoToDoListTasks(){
    // console.log("Hellloooo");
    let inputTask = document.getElementById("inputTask");
    // console.log(inputTask);
    let inputTaskText = inputTask.value.trim();
    // console.log(inputTaskText);
    if(inputTaskText === ""){
        // console.log(inputTaskText);
        return alert("Please , You Must Enter A Valid Input Task.");
    }
    // console.log(inputTaskText);
    let toDoListTasksContainer = document.getElementById("toDoListTasks");
    // console.log(toDoListTasksContainer);
    let toDoListTask = document.createElement("li");
    // console.log(toDoListTask);
    toDoListTask.innerHTML = `
        <span class="d-flex align-items-center justify-content-center ms-1">
        <i class="fa-solid fa-check-circle d-block me-1"></i>${inputTaskText}</span>
        <span class="me-1" onclick="deletedTaskFromToDoListTasks(this)"><i 
        class="fa-solid fa-trash-can"></i></span>
    `
    // console.log(toDoListTask);
    toDoListTask.className = "task";
    // console.log(toDoListTask);
    // console.log(toDoListTasksContainer);
    // toDoListTasksContainer.classList.replace("d-none" , "d-block");
    toDoListTasksContainer.classList.remove("d-none");
    toDoListTasksContainer.classList.add("d-block");
    // console.log(toDoListTasksContainer);
    toDoListTask.style.marginBlock = "12px";
    toDoListTasksContainer.appendChild(toDoListTask);
    inputTask.value = "";
};
addedButton.addEventListener("click" , addedTasksIntoToDoListTasks);
document.addEventListener("keydown" , function(event){
    // console.log(event.key);
    if((event.key == "Enter") || (event.key == "Insert")){
        addedTasksIntoToDoListTasks();
    };
});
function deletedTaskFromToDoListTasks(element){
    // console.log("Hellllooooo");
    let taskInputContainer = element.parentElement;
    // console.log(taskInputContainer);
    taskInputContainer.remove();
    let toDoListTasksContainer = document.getElementById("toDoListTasks");
    if(toDoListTasksContainer.children.length == "0"){
        // toDoListTasksContainer.classList.replace("d-block" , "d-none");
        toDoListTasksContainer.classList.remove("d-block");
        toDoListTasksContainer.classList.add("d-none");
    };
};