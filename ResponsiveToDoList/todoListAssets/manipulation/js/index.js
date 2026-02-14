let addedButton = document.getElementById("addedButton");
// console.log(addedButton);
function addedTasksIntoToDoListTasks(){
    // console.log("Helloooo.");
    let inputTask = document.getElementById("inputTask");
    // console.log(inputTask);
    let inputTaskText = inputTask.value.trim();
    // console.log(inputTaskText);
    if(!inputTaskText){
        return alert("Please Enter A New Task.");
    };
    let toDoListTask = document.createElement("li");
    // console.log(toDoListTask);
    toDoListTask.innerHTML = `
    <span class="d-flex justify-content-center align-items-center ms-1"><i class="fa-solid fa-check-circle me-1"></i> ${inputTaskText}</span>
    <span class="me-1" onclick="deletedTaskFromToDoListTasks(this)"><i class="fa-solid fa-trash-can"></i></span>`;
    toDoListTask.className = "task";
    toDoListTask.style.marginBlock = "12px";
    let toDoListTasksContainer = document.getElementById("toDoListTasks");
    // console.log(toDoListTasksContainer);
    // toDoListTasksContainer.classList.replace("d-none" , "d-block");
    toDoListTasksContainer.classList.remove("d-none");
    toDoListTasksContainer.classList.add("d-block");
    toDoListTasksContainer.appendChild(toDoListTask);
    inputTask.value = "";
};
addedButton.addEventListener("click" , addedTasksIntoToDoListTasks);
document.addEventListener("keydown" , function (event){
    // console.log(event.key)
    if((event.key == "Enter") || (event.key == "Insert")){
        addedTasksIntoToDoListTasks();
    };
});
function deletedTaskFromToDoListTasks(element){
    // console.log("HELLOOOO...");
    // console.log(element.parentElement);
    let inputTaskContainer = element.parentElement;
    // console.log(inputTaskContainer);
    // inputTaskContainer.remove();
    inputTaskContainer.addEventListener("click" , async () => {
        await new Promise((resolve) => setTimeout(resolve , 1500));
        // inputTaskContainer.style = "width: 0% !important";
        inputTaskContainer.remove();
    })
    let tasksContainer = document.getElementById("toDoListTasks");
    // console.log(tasksContainer);
    inputTaskContainer.addEventListener("click" , async () =>{
        await new Promise ((resolve) => setTimeout(resolve , 3000));
        if(tasksContainer.children.length == 0){
            // tasksContainer.classList.replace("d-block" , "d-none");
            tasksContainer.classList.remove("d-block");
            tasksContainer.classList.add("d-none");
        };
    });
};
document.addEventListener("keydown" , (event) => {
    // console.log("Hellooo")
    // console.log(event.key);
    if(event.key === "Delete"){
        deletedTaskFromToDoListTasks();
    };
});