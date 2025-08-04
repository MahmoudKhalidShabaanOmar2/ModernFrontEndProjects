var toDoListTasksContainer = document.getElementById("toDoListTasks");
// console.log(toDoListTasksContainer);
var addedBtn = document.getElementById("addedButton");
// console.log(addedBtn);
addedBtn.addEventListener("click" , function(){
    toDoListTasksContainer.style.display = "block";
});
function addedNewDifferentTasksIntoToDoListTasks(){
    const inputTaskValue = document.getElementById("inputTask");
    // console.log(inputTaskValue);
    const inputTaskTextValue = inputTaskValue.value.trim();
    // console.log(inputTaskTextValue);
    if(inputTaskTextValue === ""){
        return alert("Please Enter Our New Task To Add Into The To Do List Tasks.....");
    };
    const toDoListTasksContainer = document.getElementById("toDoListTasks");
    // console.log(toDoListTasksContainer);
    const toDoListElement = document.createElement("li");
    toDoListElement.style.marginBlock = "12px";
    // console.log(toDoListElement);
    toDoListElement.className = "task";
    toDoListElement.innerHTML = `
        <span class="d-flex align-items-center justify-content-center ms-1"><i class="fa-solid fa-check-circle"></i>${inputTaskTextValue}</span>
        <span class="me-1" onclick="deletedTaskFromToDoListTasks(this)"><i class="fa-solid fa-trash-can"></i></span>
    `
    toDoListTasksContainer.appendChild(toDoListElement);
    // console.log(toDoListTasksContainer);
    inputTaskValue.value = "";
};
addedBtn.addEventListener("click" , function(){
    addedNewDifferentTasksIntoToDoListTasks();
});
function deletedTaskFromToDoListTasks(element){
    const inputTaskVal = element.parentElement;
    // console.log(inputTaskVal);
    inputTaskVal.remove();
    const toDoListTasksCont = document.getElementById("toDoListTasks");
    // console.log(toDoListTasksCont);
    if(toDoListTasksCont.children.length === 0){
        toDoListTasksCont.style.display = "none";
    };
};
var inputTaskVal = document.getElementById("inputTask");
// console.log(inputTaskVal);
inputTaskVal.addEventListener("keydown" , function(event){
    if(event.key === "enter" || event.key === "Enter"){
        toDoListTasksContainer.style.display = "block";
        addedNewDifferentTasksIntoToDoListTasks();
    };
});
inputTaskVal.addEventListener("keydown", function(event) {
    if (event.key === "Backspace") {
        deletedTaskFromToDoListTasks();
    }
});