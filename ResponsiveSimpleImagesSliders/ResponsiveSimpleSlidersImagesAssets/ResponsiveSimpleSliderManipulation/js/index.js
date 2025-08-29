var mainArrayOfMainSliderImagesContainer = Array.from(document.querySelectorAll(".main-responsive-slider-container .main-slider-images-container img"));
// console.log(mainArrayOfMainSliderImagesContainer);
// for( var i=0 ; i < mainArrayOfMainSliderImagesContainer.length ; i++){
//     console.log(mainArrayOfMainSliderImagesContainer[i]);
// }
var mainSlideBoxImagesContainer = document.querySelector(".main-responsive-slider-container .main-slider-box-images-container");
// console.log(mainSlideBoxImagesContainer);
var mainSlideImageBoxContainer = document.querySelector(".main-responsive-slider-container .main-slider-box-images-container .main-slide-image-box-container");
// console.log(mainSlideImageBoxContainer);
var fristImgSrcFromArrayOfSliderImagesContainer = mainArrayOfMainSliderImagesContainer[0].getAttribute("src");
// console.log(fristImgSrcFromArrayOfSliderImagesContainer);
mainSlideImageBoxContainer.style.backgroundImage = `url(${fristImgSrcFromArrayOfSliderImagesContainer})`;
var nextSlideButton = document.querySelector(".main-responsive-slider-container .main-slider-box-images-container .main-slide-image-box-container .main-slide-image-box-icons-container #nextSlideBtn");
// console.log(nextSlideButton);
var previousSlideButton = document.querySelector(".main-responsive-slider-container .main-slider-box-images-container .main-slide-image-box-container .main-slide-image-box-icons-container #previousSlideBtn");
// console.log(previousSlideButton);
var closeSlideButton = document.querySelector(".main-responsive-slider-container .main-slider-box-images-container .main-slide-image-box-container .main-slide-image-box-icons-container #closeSlideBtn");
// console.log(closeSlideButton);
var mainSliderContentContainer = document.querySelector(".main-responsive-slider-container .main-slider-content-container");
// console.log(mainSliderContentContainer);
var secondarySliderHeading = document.querySelector(".main-responsive-slider-container .main-slider-content-container #secondarySliderHeading");
// console.log(secondarySliderHeading);
var secondarySliderDescription = document.querySelector(".main-responsive-slider-container .main-slider-content-container #secondarySliderDescription");
// console.log(secondarySliderDescription);
var userName = window.prompt("Please Enter The User Name Is : ");
// console.log(userName);
if(!userName){
    userName = "guest";
};
// console.log(userName);
var getSliderButton = document.querySelector(".main-responsive-slider-container .main-slider-content-container #getSliderContainer");
// console.log(getSliderButton);
var currentIndex = 0;
// console.log(currentIndex);
async function displayingNextSlideImage(){
    await new Promise (resolve => setTimeout(resolve , 1000));
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
}
// displayingNextSlideImage();
async function displayingPreviousSlideImage(){
    await new Promise(resolve => setTimeout(resolve , 1000));
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
}
// displayingPreviousSlideImage();
async function displayingSecondarySliderContent(){
    mainSliderContentContainer.classList.replace("d-none" , "d-block")
    secondarySliderHeading.innerHTML = '<i class="fa-solid fa-sliders"></i>'+" simple natural slider images";
    // console.log(secondarySliderHeading)
    secondarySliderDescription.innerHTML = `hello everyOne! , and welcome \"${userName}\" to the responsive simple natural slider images , you can change between different images in the responsive simple slider of the different natural images...`
    // console.log(secondarySliderDescription);
    getSliderButton.innerHTML = `get natural simple slider images. <i class="fa-solid fa-sliders"></i> <i class="fa-solid fa-arrow-up-right-from-square"></i>`;
};
// displayingSecondarySliderContent();
async function closeSlideImage(){
    await new Promise(resolve => setTimeout(resolve , 1000));
    // mainSlideBoxImagesContainer.classList.replace("d-block" , "d-none")
    mainSlideBoxImagesContainer.classList.remove("d-block");
    mainSlideBoxImagesContainer.classList.add("d-none");
    // mainSlideImageBoxContainer.classList.replace("d-block" , "d-none");
    mainSlideImageBoxContainer.classList.remove("d-block");
    mainSlideImageBoxContainer.classList.add("d-none");
    displayingSecondarySliderContent();
};
// closeSlideImage();
async function gettingMainSliderImages(){
    await new Promise(resolve => setTimeout(resolve , 1500));
    // mainSlideBoxImagesContainer.classList.replace("d-none" , "d-block");
    mainSlideBoxImagesContainer.classList.remove("d-none")
    mainSlideBoxImagesContainer.classList.add("d-block");
    // mainSlideImageBoxContainer.classList.replace("d-none" , "d-block");
    mainSlideImageBoxContainer.classList.remove("d-none");
    mainSlideImageBoxContainer.classList.add("d-block");
    // mainSliderContentContainer.classList.replace("d-block" , "d-none");
    mainSliderContentContainer.classList.remove("d-block");
    mainSliderContentContainer.classList.add("d-none");
}
nextSlideButton.addEventListener("click" , displayingNextSlideImage);
previousSlideButton.addEventListener("click" , displayingPreviousSlideImage);
closeSlideButton.addEventListener("click" , closeSlideImage);
getSliderButton.addEventListener("click" , gettingMainSliderImages);