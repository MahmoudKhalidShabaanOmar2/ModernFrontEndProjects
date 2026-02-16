let mainDescription = document.querySelector(".main-container .heading-container #mainDescription");
// console.log(mainDescription);
// mainDescription.classList.replace("d-block" , "d-none");
mainDescription.classList.remove("d-block");
mainDescription.classList.add("d-none");
// console.log(mainDescription);
let mainButtonsContainer = document.querySelector(".main-container .heading-container #mainButtonsContainer");
// console.log(mainButtonsContainer);
mainButtonsContainer.classList.add("mt-4")
// console.log(mainButtonsContainer);
let displayingMainDescriptionButton = document.querySelector(".main-container .heading-container #mainButtonsContainer #displayingMainDescriptionBtn");
// console.log(displayingMainDescriptionButton);
let userName = window.prompt("Please Enter The User Name Is : ")
// console.log(userName);
if(!userName){
    // console.log("HELLLOOOOOO.");
    window.alert("Please Enter The Full User Name Is : ");
    userName = "Guest";
    // console.log(userName);
};
// console.log(userName);
async function displayingMainDescription(){
    await new Promise((resolve) => setTimeout(resolve , 500));
    // console.log("HEllloooo");
    mainDescription.classList.replace("d-none" , "d-block");
    // mainDescription.classList.remove("d-none");
    // mainDescription.add("d-block"); 
    // console.log(mainDescription);
    mainButtonsContainer.classList.remove("mt-4");
    // console.log(mainDescription); 
    mainDescription.innerHTML = `hello everyOne! , and welcome ${userName} to the resposive advanced random quotes generation , and finally you can change between different quotes generation.`;
}
// displayingMainDescriptionButton.addEventListener("click" , displayingMainDescription);
displayingMainDescriptionButton.addEventListener("click" , async () =>{
    // console.log("HEllllllllo");
    await new Promise((resolve) => setTimeout(resolve , 2500));
    // console.log("HELLOOOOO.");
    displayingMainDescription();
    // displayingMainDescriptionButton.classList.replace("d-inline" , "d-none");
    displayingMainDescriptionButton.classList.remove("d-inline");
    displayingMainDescriptionButton.classList.add("d-none");
    // console.log(displayingMainDescriptionButton);
    // mainButtonsContainer.classList.remove("justify-content-between");
    // mainButtonsContainer.classList.add("justify-content-center");
    mainButtonsContainer.classList.replace("justify-content-between" , "justify-content-center");
    mainButtonsContainer.classList.add("gap-4")
})
let removingMainDescriptionButton = document.querySelector(".main-container .heading-container #mainButtonsContainer #removingMainDescriptionBtn");
// console.log(removingMainDescriptionButton);
async function removingMainDescription(){
    // console.log("HELLOOOOOO");
    await new Promise((resolve) => setTimeout(resolve , 500));
    // console.log("HELLLOOOOOOOOO...");
    // mainDescription.classList.replace("d-block" , "d-none");
    mainDescription.classList.remove("d-block");
    mainDescription.classList.add("d-none");
    // console.log(mainDescription);
    mainButtonsContainer.classList.add("mt-4");
}
// removingMainDescriptionButton.addEventListener("click" ,  removingMainDescription);
removingMainDescriptionButton.addEventListener("click" , async () => {
    // console.log("HELLLLLLOOOOOOO");
    await new Promise((resolve) => setTimeout(resolve , 2500));
    // console.log("HELLOOOOOO....");
    if(mainDescription.classList.contains("d-none")){
        window.alert("Please Clicking On The Displaying Main Description Button At The Frist To Get The Main Description.");
    }
    if(mainDescription.classList.contains("d-block")){
        // console.log("HELLLOOOOOOO....");
        removingMainDescription();
        // removingMainDescriptionButton.classList.replace("d-inline" , "d-none");
        removingMainDescriptionButton.classList.remove("d-inline");
        removingMainDescriptionButton.classList.add("d-none");
        // console.log(removingMainDescription);
        // displayingMainDescriptionButton.classList.replace("d-none" , "d-inline");
        displayingMainDescriptionButton.classList.remove("d-none");
        displayingMainDescriptionButton.classList.add("d-inline");
    };
    // console.log(removingMainDescriptionButton);
});
let generationNewRandomQuoteButton = document.querySelector(".main-container .heading-container #mainButtonsContainer #generationNewRandomQuoteBtn");
// console.log(generationNewRandomQuoteButton);
let mainContainer = document.querySelector("#mainContainer");
// console.log(mainContainer);
async function generationNewRandomQuote(){
    // console.log("HELLOOOOO");
    await new Promise((resolve) => setTimeout(resolve , 1000));
    // console.log("HELLOOOOOO");
    let lastRandomQuoteElementsContainer = document.querySelector(".quote-container:last-child");
    // console.log(lastRandomQuoteElementsContainer);
    if(lastRandomQuoteElementsContainer){
        // console.log("HELLOOOO");
        // console.log(lastRandomQuoteElementsContainer);
        lastRandomQuoteElementsContainer.remove();
    }
    let mainRandomQuoteElementsContainer = document.createElement("section");
    // console.log(mainRandomQuoteElementsContainer);
    mainRandomQuoteElementsContainer.className = "quote-container bg-brown p-3 rounded-3 trans-sec mx-auto mt-4 position-relative";
    // console.log(mainRandomQuoteElementsContainer);
    mainContainer.appendChild(mainRandomQuoteElementsContainer);
    // console.log(mainContainer);
    let mainLoaderContainer = document.createElement("div");
    // console.log(mainLoaderContainer);
    let quotation = document.createElement("i");
    // console.log(quotation);
    quotation.className = "fa-solid fa-quote-right text-sky fs-4";
    // console.log(quotation);
    mainLoaderContainer.appendChild(quotation);
    // console.log(mainLoaderContainer);
    mainLoaderContainer.className = "main-loader-container bg-black border border-5 border-white rounded-circle mx-auto d-flex align-items-center justiify-content-center";
    // console.log(mainLoaderContainer);
    mainRandomQuoteElementsContainer.appendChild(mainLoaderContainer);
    // console.log(mainRandomQuoteElementsContainer);
    try{
        // console.log("HELLOOOO");
        generationNewRandomQuoteButton.disabled = true;
        // console.log("HELLOOOOO");
        const fetchingQuote = await fetch("https://dummyjson.com/quotes/random");
        // console.log(fetchingQuote);
        if(fetchingQuote){
            // console.log("HELLOOOOOO");
            // console.log(fetchingQuote);
            mainLoaderContainer.remove();
        }
        const fetchingQuoteData = await fetchingQuote.json();
        // console.log(fetchingQuoteData);
        // console.log(fetchingQuoteData.id);
        // console.log(fetchingQuoteData.author);
        // console.log(fetchingQuoteData.quote);
        let quoteDescriptionData = document.createElement("p");
        // console.log(quoteDescriptionData);
        quoteDescriptionData.className = "quote-description main-family text-capitalize bg-mint p-1 m-y-1 position-relative trans-sec text-brown rounded-3 bg-opacity-50";
        quoteDescriptionData.innerHTML = `${fetchingQuoteData.id + "-- &nbsp" + fetchingQuoteData.quote}`;
        // console.log(quoteDescriptionData);
        mainRandomQuoteElementsContainer.appendChild(quoteDescriptionData);
        // console.log(mainRandomQuoteElementsContainer);
        let quoteAuthorData = document.createElement("p");
        // console.log(quoteAuthorData);
        quoteAuthorData.className = "quote-author main-family text-capitalize bg-mint text-brown my-0 trans-sec p-1 w-fit mx-auto rounded-3 position-relative";
        // console.log(quoteAuthorData);
        quoteAuthorData.innerHTML = `${fetchingQuoteData.author}`;
        // console.log(quoteAuthorData);
        mainRandomQuoteElementsContainer.appendChild(quoteAuthorData);
        // console.log(mainRandomQuoteElementsContainer);
    }
    catch(error){
        // console.log("Errors");
        // console.log("HELLOOOOOO");
        // console.log(error);
        // console.log(error.message);
        let errorMessage = document.createElement("p");
        // console.log(errorMessage);
        errorMessage.className = "error-message bg-danger w-fit p-2 rounded-3 text-beige trans-s mx-auto fs-2 fw-bold mb-0 text-capitalize position-relative bg-opacity-75";
        // console.log(errorMessage);
        errorMessage.innerHTML = error.message;
        // console.log(errorMessage);
        mainRandomQuoteElementsContainer.appendChild(errorMessage);
        // console.log(mainRandomQuoteElementsContainer);
        if(errorMessage){
            // console.log("HELLOOOOO");
            // console.log(errorMessage);
            mainLoaderContainer.remove();
        }
    }
    finally{
        // console.log("Heelllooo")
        generationNewRandomQuoteButton.disabled = false;
        // console.log("HELLOOOOOOO");
    }
};
generationNewRandomQuoteButton.addEventListener("click" , generationNewRandomQuote);
document.addEventListener("keydown" , () => {
    // console.log("HELLOOOOO");
    // console.log(event.key);
    if((event.key == "ArrowRight") || (event.key == "ArrowLeft")) generationNewRandomQuote();
})