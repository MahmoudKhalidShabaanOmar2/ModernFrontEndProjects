// console.log("HELLLOOOOOO");
let mainLoaderContainer = document.querySelector(".main-container #mainLoaderContainer");
// console.log(mainLoaderContainer);
window.addEventListener("load" , function (){
    // console.log("HELLOOOOOO");
    setTimeout(function (){
        // console.log("HELLOOOOO....");
        // mainLoaderContainer.classList.replace("d-flex" , "d-none");
        mainLoaderContainer.classList.remove("d-flex");
        mainLoaderContainer.classList.add("d-none")
    } , 3000);
});
let mainContentContainer = document.querySelector(".main-container #mainContentContainer");
// console.log(mainContentContainer);
window.addEventListener("load" , function(){
    // console.log("HELLOOOOOO....");
    setTimeout(function (){
        // console.log("HELLOOOO");
        // mainContentContainer.classList.replace("d-none" , "d-block");
        mainContentContainer.classList.remove("d-none");
        mainContentContainer.classList.add("d-block");
    } , 3500);
})
let mainButton = document.querySelector(".main-container #mainButton");
// console.log(mainButton);
mainButton.addEventListener("click" , function (){
    // console.log("HELLOOOOOO....");
    setTimeout(function (){
        // console.log("HELLOOOOOO");
        mainLoaderContainer.classList.replace("d-none" , "d-flex");

        mainContentContainer.classList.replace("d-block" , "d-none");

    } , 500)
    setTimeout(function (){
        // console.log("HELLOOOOO....");
        window.location.href = "/";
    } , 3000);
});