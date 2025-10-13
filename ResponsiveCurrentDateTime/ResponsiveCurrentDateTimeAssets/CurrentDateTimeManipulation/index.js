let userName = window.prompt("Please Enter The User Name Is : ");
// console.log(userName);
if(!userName){
    window.alert("Please Enter The User Name , Before Getting The Current Date , And Time...");
    userName = "guest";
    // console.log(userName);
};
// console.log(userName);
let mainDescription = document.querySelector(".main-responsive-content-container #mainDescription");
// console.log(mainDescription);
mainDescription.innerHTML = `hello everyOne! , and welcome \"${userName}\" to the responsive current date , and time , this project is mainly used to get the current date , and time in the egypt country`;
let mainButton = document.querySelector(".main-responsive-content-container #mainButton");
// console.log(mainButton);
let currentDateTime = document.querySelector(".main-responsive-content-container #currentDateTime");
// console.log(currentDateTime);
async function gettingCurrentDateTimeInEgypt(){
    await new Promise(resolve => setTimeout(resolve , 1500));
    // console.log("Helllloooo");
    const currentDateTimeOptions = {
        timeZone: "Africa/Cairo" , 
        year: "numeric" , 
        month: "long" , 
        day: "2-digit" ,
        weelday: "long" ,
        hour: "2-digit" ,
        minute: "2-digit" ,
        second: "2-digit"
    };
    // console.log(currentDateTimeOptions);
    const currentDateTimeInEgypt = new Intl.DateTimeFormat("EN-EG" , currentDateTimeOptions).format(new Date());
    // currentDateTime.classList.replace("d-none" , "d-block");
    currentDateTime.classList.remove("d-none");
    currentDateTime.classList.add("d-block");
    currentDateTime.innerHTML = `the current date , and time into egypt is : ${currentDateTimeInEgypt}`;
}
mainButton.addEventListener("click" , gettingCurrentDateTimeInEgypt);