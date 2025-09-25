let sliderHeading = document.querySelector(".main-responsive-natural-slider-container .main-responsive-slider-heading-container #mainSliderHeading");
// console.log(sliderHeading);
let sliderDescription = document.querySelector(".main-responsive-natural-slider-container .main-responsive-slider-heading-container #mainSliderDescription");
// console.log(sliderDescription);
let sliderButtons = document.querySelector(".main-responsive-natural-slider-container .main-responsive-slider-heading-container .main-responsive-slider-buttons-container");
// console.log(sliderButtons);
let userName = window.prompt("Please Enter The User Name Is : ");
// console.log(userName);
if(userName.trim() === ""){
    userName = "guest";
    // console.log(userName);
};
// console.log(userName);
let getSliderDescriptionBtn = document.querySelector(".main-responsive-natural-slider-container .main-responsive-slider-heading-container .main-responsive-slider-buttons-container #getSliderDescriptionButton");
// console.log(getSliderDescriptionBtn);
let removeSliderDescriptionBtn = document.querySelector(".main-responsive-natural-slider-container .main-responsive-slider-heading-container .main-responsive-slider-buttons-container #removeSliderDescriptionButton");
// console.log(removeSliderDescriptionBtn);
async function displayingMainSliderDescription(){
    await new Promise(resolve => setTimeout(resolve , 1000));
    // sliderDescription.classList.replace("d-none" , "d-block");
    sliderDescription.classList.remove("d-none");
    sliderDescription.classList.add("d-block");
    sliderDescription.innerHTML = `hello everyOne! , and welcome \"${userName}\" , to the responsive advanced natural slider images , you can change between different natural images in the responsive advanced natural slider`;
    // console.log(sliderDescription);
    // getSliderDescriptionBtn.classList.replace("d-block" , "d-none");
    getSliderDescriptionBtn.classList.remove("d-block");
    getSliderDescriptionBtn.classList.add("d-none");
    removeSliderDescriptionBtn.classList.add("mx-auto")
};
async function removingMainSliderDescription(){
    await new Promise (resolve => setTimeout(resolve , 1000));
    // sliderDescription.classList.replace("d-block" , "d-none");
    sliderDescription.classList.remove("d-block");
    sliderDescription.classList.add("d-none");
    // removeSliderDescriptionBtn.classList.replace("d-block" , "d-none");
    removeSliderDescriptionBtn.classList.remove("d-block");
    removeSliderDescriptionBtn.classList.add("d-none");
    // getSliderDescriptionBtn.classList.replace("d-none" , "d-block");
    getSliderDescriptionBtn.classList.remove("d-none");
    getSliderDescriptionBtn.classList.add("d-block");
    getSliderDescriptionBtn.classList.add("mx-auto");
    sliderDescription.classList.replace("d-block" , "d-none");
    sliderButtons.style.boxShadow = "0px 0px 0px 0px #005";
    // getSliderDescriptionBtn.classList.replace("p-3" , "no-padding");
    removeSliderDescriptionBtn.classList.remove("p-3");
    removeSliderDescriptionBtn.classList.add("no-padding");
    // removeSliderDescriptionBtn.classList.replace("p-3" , "no-padding");
    removeSliderDescriptionBtn.classList.remove("p-3");
    removeSliderDescriptionBtn.classList.add("no-padding");
    // sliderButtons.classList.replace("p-4" , "no-padding");
    sliderButtons.classList.remove("p-4");
    sliderButtons.classList.add("no-padding");
};
sliderHeading.addEventListener("click" , displayingMainSliderDescription);
getSliderDescriptionBtn.addEventListener("click" , displayingMainSliderDescription);
removeSliderDescriptionBtn.addEventListener("click" , removingMainSliderDescription);
const mainArrayOfMainNaturalSliderImages = Array.from(document.querySelectorAll(".main-responsive-natural-slider-container .main-responsive-natural-slider-images-container section section .main-responsive-natural-slide-image-container .main-responsive-natural-slide-img-container img"));
// console.log(mainArrayOfMainNaturalSliderImages);
let mainNaturalSliderLightBox = document.querySelector(".main-responsive-natural-slider-container .main-responsive-natural-slider-light-box-container");
// console.log(mainNaturalSliderLightBox);
let mainNaturalSliderLightBoxImage = document.querySelector(".main-responsive-natural-slider-container .main-responsive-natural-slider-light-box-container .main-responsive-natural-slider-light-box-image-container");
// console.log(mainNaturalSliderLightBoxImage);
var currentIndex;
// console.log(currentIndex);
for( var i=0 ; i < mainArrayOfMainNaturalSliderImages.length ; i++){
    // console.log(mainArrayOfMainNaturalSliderImages[i]);
    mainArrayOfMainNaturalSliderImages[i].addEventListener("click" , async function(event){
        await new Promise(resolve => setTimeout(resolve , 6000));
        // console.log("hello");
        // console.log(event);
        // console.log(event.target);
        // mainNaturalSliderLightBox.classList.replace("d-none" , "d-flex");
        mainNaturalSliderLightBox.classList.remove("d-none");
        mainNaturalSliderLightBox.classList.add("d-flex");
        // console.log(event.target);
        // console.log(event.target.getAttribute("src"));
        const mainNaturalSliderImagesSource = event.target.getAttribute("src");
        // console.log(mainNaturalSliderImagesSource);
        // mainNaturalSliderLightBoxImage.style.BackgroundImage = `url(${mainNaturalSliderImagesSource})`;
        mainNaturalSliderLightBoxImage.style.backgroundImage = `url(${mainNaturalSliderImagesSource})`;
        // console.log(mainArrayOfMainNaturalSliderImages.indexOf(event.target));
        currentIndex = mainArrayOfMainNaturalSliderImages.indexOf(event.target);
        // console.log(currentIndex);
    })
};
let nextSlideBtn = document.querySelector(".main-responsive-natural-slider-container .main-responsive-natural-slider-light-box-container .main-responsive-natural-slider-light-box-image-container #nextSlideButton");
// console.log(nextSlideBtn);
let previousSlideBtn = document.querySelector(".main-responsive-natural-slider-container .main-responsive-natural-slider-light-box-container .main-responsive-natural-slider-light-box-image-container #previousSlideButton");
// console.log(previousSlideBtn);
let closeSlideBtn = document.querySelector(".main-responsive-natural-slider-container .main-responsive-natural-slider-light-box-container .main-responsive-natural-slider-light-box-image-container #closeSlideButton");
// console.log(closeSlideBtn);
async function nextNaturalSlideImage(){
    await new Promise(resolve => setTimeout(resolve , 500));
    // console.log("hello");
    currentIndex++;
    // console.log(currentIndex);
    if(currentIndex == mainArrayOfMainNaturalSliderImages.length){
        currentIndex = 0;
        // console.log(currentIndex);
    };
    // console.log(currentIndex);
    let mainNaturalSliderImagesSources = mainArrayOfMainNaturalSliderImages[currentIndex].getAttribute("src");
    // console.log(mainNaturalSliderImagesSources);
    mainNaturalSliderLightBoxImage.style.backgroundImage = `url(${mainNaturalSliderImagesSources})`;
};
async function previousNaturalSlideImage(){
    await new Promise(resolve => setTimeout(resolve , 500));
    // console.log("hello");
    currentIndex--;
    // console.log(currentIndex);
    if(currentIndex == -1){
        currentIndex = mainArrayOfMainNaturalSliderImages.length - 1;
        // console.log(currentIndex);
    };
    // console.log(currentIndex);
    let mainNaturalSliderImagesSources = mainArrayOfMainNaturalSliderImages[currentIndex].getAttribute("src");
    // console.log(mainNaturalSliderImagesSources);
    mainNaturalSliderLightBoxImage.style.backgroundImage = `url(${mainNaturalSliderImagesSources})`;
};
async function closingNaturalSlideImage(){
    await new Promise(resolve => setTimeout(resolve , 500));
    // console.log("hello");
    // mainNaturalSliderLightBox.classList.replace("d-flex" , "d-none");
    mainNaturalSliderLightBox.classList.remove("d-flex");
    mainNaturalSliderLightBox.classList.add("d-none");
};
document.addEventListener("keydown" , async function(event){
    await new Promise(resolve => setTimeout(resolve , 500));
    // console.log(event.key);
    // console.log("hello");
    if(event.key == "ArrowRight"){
        // console.log("hello");
        nextNaturalSlideImage();
    }
    else if(event.key == "ArrowLeft"){
        // console.log("hello");
        previousNaturalSlideImage();
    }
    else if(event.key == "Escape"){
        // console.log("helooo")
        closingNaturalSlideImage();
    }
});
mainNaturalSliderLightBox.addEventListener("click" , async function(){
    await new Promise(resolve => setTimeout(resolve , 500));
    closingNaturalSlideImage();
});
mainNaturalSliderLightBoxImage.addEventListener("click" , function(event){
    event.stopPropagation();
});
nextSlideBtn.addEventListener("click" , nextNaturalSlideImage);
previousSlideBtn.addEventListener("click" , previousNaturalSlideImage);
closeSlideBtn.addEventListener("click" , closingNaturalSlideImage);