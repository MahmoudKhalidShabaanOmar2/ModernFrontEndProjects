// var mainArrayOfMainSliderImagesContainer = document.querySelectorAll(".main-responsive-slider-container .main-slider-images-container img");
// console.log(mainArrayOfMainSliderImagesContainer);
// for(var i=0 ; i < mainArrayOfMainSliderImagesContainer.length ; i++){
    // console.log(mainArrayOfMainSliderImagesContainer[i]);
// }
var mainArrayOfMainSliderImagesContainer = Array.from(document.querySelectorAll(".main-responsive-slider-container .main-slider-images-container img"));
// console.log(mainArrayOfMainSliderImagesContainer);
// for(var i=0 ; i < mainArrayOfMainSliderImagesContainer.length ; i++){
//     console.log(mainArrayOfMainSliderImagesContainer[i]);
// }
var mainSliderBoxImagesContainer = document.querySelector(".main-responsive-slider-container .main-slider-box-images-container");
// console.log(mainSliderBoxImagesContainer);
var mainSlideImageBoxContainer = document.querySelector(".main-responsive-slider-container .main-slider-box-images-container .main-slide-image-box-container");
// console.log(mainSlideImageBoxContainer);
var fristImgSrcFromArrayOfSliderImagesContainer = mainArrayOfMainSliderImagesContainer[0].getAttribute("src");
// console.log(fristImgSrcFromArrayOfSliderImagesContainer);
mainSlideImageBoxContainer.style.backgroundImage = `url(${fristImgSrcFromArrayOfSliderImagesContainer})`;
// console.log(mainSlideImageBoxContainer);
// var mainSrcsOfMainSliderImagesContainer = Array.from(document.querySelectorAll(".main-responsive-slider-container .main-slider-images-container img").getAttribute("src"));
// console.log(mainSrcsOfMainSliderImagesContainer);
var currentIndex = 0;
// console.log(currentIndex);
var nextSlideButton = document.querySelector(".main-responsive-slider-container .main-slider-box-images-container .main-slide-image-box-container .main-slide-image-box-icons-container #nextSlideBtn");
// console.log(nextSlideButton);
var previousSlideButton = document.querySelector(".main-responsive-slider-container .main-slider-box-images-container .main-slide-image-box-container .main-slide-image-box-icons-container #previousSlideBtn");
// console.log(previousSlideButton);
var closeSlideButton = document.querySelector(".main-responsive-slider-container .main-slider-box-images-container .main-slide-image-box-container .main-slide-image-box-icons-container #closeSlideBtn");
// console.log(closeSlideButton);
var mainSliderContentContainer = document.querySelector(".main-responsive-slider-container .main-slider-content-container");
// console.log(mainSliderContentContainer);
async function displayingNextSlideImage(){
    // console.log("HELLOOO");
    await new Promise((resolve) => setTimeout(resolve , 1500));
    // console.log("HELLLOOOOO");
    // console.log(nextSlideButton);
    // console.log(currentIndex);
    currentIndex++;
    // console.log(currentIndex);
    if(currentIndex == mainArrayOfMainSliderImagesContainer.length){
        currentIndex = 0;
        // console.log(currentIndex);
    };
    // console.log(currentIndex);
    var imgsSrcsOfAllImagesInArrayOfSlideImages = mainArrayOfMainSliderImagesContainer[currentIndex].getAttribute("src");
    // console.log(imgsSrcsOfAllImagesInArrayOfSlideImages);
    mainSlideImageBoxContainer.style.backgroundImage = `url(${imgsSrcsOfAllImagesInArrayOfSlideImages})`;
};
// displayingNextSlideImage();
async function displayingPreviousSlideImage(){
    // console.log("HELLLOOO");
    await new Promise((resolve) => setTimeout(resolve , 1500));
    // console.log("HELLLLLLOOOOOO");
    // console.log(previousSlideButton);
    // console.log(currentIndex);
    currentIndex--;
    // console.log(currentIndex);
    if(currentIndex == -1){
        currentIndex = mainArrayOfMainSliderImagesContainer.length - 1;
        // console.log(currentIndex);
    };
    // console.log(currentIndex);
    var imgsSrcsOfAllImagesInArrayOfSlideImages = mainArrayOfMainSliderImagesContainer[currentIndex].getAttribute("src");
    // console.log(imgsSrcsOfAllImagesInArrayOfSlideImages);
    mainSlideImageBoxContainer.style.backgroundImage = `url(${imgsSrcsOfAllImagesInArrayOfSlideImages})`;
};
// displayingPreviousSlideImage();
async function closeSlideImage(){
    // console.log("HELLLOOOOOO");
    await new Promise((resolve) => setTimeout(resolve , 1500));
    // console.log("HELLOIIIIII");
    // console.log(closeSlideButton);
    // mainSliderBoxImagesContainer.classList.replace("d-block" , "d-none");
    mainSliderBoxImagesContainer.classList.remove("d-block");
    mainSliderBoxImagesContainer.classList.add("d-none");
    displayingSecondarySliderContent();
};
// closeSlideImage();
var userName = window.prompt("Please Enter The User Name Is : ");
// console.log(userName);
if(!userName){
    userName = "guest";
};
async function displayingSecondarySliderContent(){
    // console.log("HELLLOOOO");
    await new Promise((resolve) => setTimeout(resolve , 2500));
    // console.log("HELLLIOIIIII");
    // console.log(mainSliderContentContainer);
    // mainSliderContentContainer.classList.replace("d-none" , "d-block");
    mainSliderContentContainer.classList.remove("d-none");
    mainSliderContentContainer.classList.add("d-block");
    var secondarySliderHeading = document.querySelector(".main-responsive-slider-container .main-slider-content-container #secondarySliderHeading");
    // console.log(secondarySliderHeading);
    secondarySliderHeading.innerHTML = '<i class="fa-solid fa-sliders"></i>'+" simple natural slider images...";
    // console.log(secondarySliderHeading);
    var secondarySliderDescription = document.querySelector(".main-responsive-slider-container .main-slider-content-container #secondarySliderDescription");
    // console.log(secondarySliderDescription);
    secondarySliderDescription.innerHTML = `hello everyOne! , and welcome \"${userName}\" to the responsive simple natural slider images , you can change between different images in the responsive simple slider of the different natural images...`
    var gettingMainSliderImagesButton = document.querySelector(".main-responsive-slider-container .main-slider-content-container #gettingSliderButton");
    // console.log(gettingMainSliderImagesButton);
    gettingMainSliderImagesButton.innerHTML = `get natural simple slider images. <i class="fa-solid fa-sliders"></i> <i class="fa-solid fa-arrow-up-right-from-square"></i>`;
    gettingMainSliderImagesButton.addEventListener("click" , async () => {
        await new Promise ((resolve) => setTimeout(resolve , 2250));
        // mainSliderBoxImagesContainer.classList.replace("d-none" , "d-block");
        // console.log("hello");
        mainSliderBoxImagesContainer.classList.remove("d-none");
        mainSliderBoxImagesContainer.classList.add("d-block");
        if(mainSliderBoxImagesContainer.classList.contains("d-block")){
             mainSliderContentContainer.classList.replace("d-block" , "d-none");
        }
    })
}
// displayingSecondarySliderContent();
nextSlideButton.addEventListener("click" , displayingNextSlideImage);
previousSlideButton.addEventListener("click" , displayingPreviousSlideImage);
closeSlideButton.addEventListener("click" , closeSlideImage);
document.addEventListener("keydown" , (event) => {
    // console.log("HELLOOOO")
    // console.log(event);
    // console.log(event.key);
    if(event.key == "ArrowRight"){
        displayingNextSlideImage();
    }
    else if(event.key == "ArrowLeft"){
        displayingPreviousSlideImage();
    }
    else if(event.key == "Escape"){
        closeSlideImage();
    }
    else return;
})