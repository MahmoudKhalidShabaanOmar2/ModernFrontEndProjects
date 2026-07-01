// console.log("HELLOOOOOO");
let mainHeading = document.querySelector("body .main-container #mainHeading");
// console.log(mainHeading);
let mainDescription = document.querySelector("body .main-container #mainDescription");
// console.log(mainDescription);
let mainButton = document.querySelector("body .main-container #mainButton");
// console.log(mainButton);
let userName = window.prompt("Please Enter The User Name Is : ");
// console.log(userName);
if(!userName){
    userName = "guest";
};
// console.log(userName);
let mainLoaderContainer = document.querySelector(".main-container #mainLoaderContainer");
// console.log(mainLoaderContainer);
async function displayingMainContent(){
    await new Promise ((resolve) => setTimeout(resolve , 500));
    // console.log("HELLOOOOO");
    mainHeading.innerHTML = `our responsive random background color...`;
    // console.log(mainHeading);
    // mainHeading.classList.replace("d-none" , "d-block");
    mainHeading.classList.remove("d-none");
    mainHeading.classList.add("d-block");
    // console.log(mainHeading);
    mainDescription.innerHTML = `hello everyOne! , and welcome &quot;${userName}&quot; to the responsive random background color , you can change between different random colors`;
    // console.log(mainDescription);
    // mainDescription.classList.replace("d-none" , "d-block");
    mainDescription.classList.remove("d-none");
    mainDescription.classList.add("d-block");
    // console.log(mainDescription);
    mainButton.innerHTML = `generation random background color...`;
    // console.log(mainButton);
    // mainButton.classList.replace("d-none" , "d-block");
    mainButton.classList.remove("d-none");
    mainButton.classList.add("d-block");
    // console.log(mainButton);
};
// displayingMainContent();
window.addEventListener("load" , function (){
    setTimeout(() => {
        // console.log("HELLLLOOOOO");
        // mainLoaderContainer.classList.replace("d-block", "d-none");
        mainLoaderContainer.classList.remove("d-block");
        mainLoaderContainer.classList.add("d-none");
        // console.log(mainLoaderContainer)
        displayingMainContent();
    } , 3000);
});
const changeRandomBackgroundColor = async () => {
    await new Promise(resolve => setTimeout(resolve , 500));
    // console.log("HELLLLOOOOO");
    const redColor = Math.floor(Math.random() * 256);
    // console.log(redColor);
    const greenColor = Math.floor(Math.random() * 256);
    // console.log(greenColor);
    const blueColor = Math.floor(Math.random() * 256);
    // console.log(blueColor);
    const RGBRandomBackgroundColor = `rgb(${redColor} , ${greenColor} , ${blueColor})`;
    // console.log(RGBRandomBackgroundColor);
    document.body.style.backgroundColor = RGBRandomBackgroundColor;
};
changeRandomBackgroundColor();
mainButton.addEventListener("click" , changeRandomBackgroundColor);
mainHeading.addEventListener("click" , changeRandomBackgroundColor);