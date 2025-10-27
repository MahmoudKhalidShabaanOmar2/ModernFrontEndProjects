let arrayOfObjectsOfQuotesContainer = [
    {
        "authorName" : "john." , 
        "quoteNumber" : "one." ,
        "quoteDescription" : "believe in yourself.",
    },
    {
        "authorName" : "david." , 
        "quoteNumber" : "two." , 
        "quoteDescription" : "success is not final , and failure is not fatal.",
    },
    {
        "authorName" : "mark.",
        "quoteNumber": "three.",
        "quoteDesciption" : "do one thing every day that scares you." ,
    },
    {
        "authorName" : "marcos." , 
        "quoteNumber" : "four.",
        "quoteDescription" : "stay hungery , and stay foolish.",
    },
    {
        "authorName" : "john." ,
        "quoteNumber" : "five." , 
        "quoteDescription" : "your limitation-it's only your imagination." ,
    },
    {
        "authorName" : "joe." , 
        "quoteNumber" : "six." , 
        "quoteDescription" : "push yourself, because no one else is going to do it for you.",
    },
    {
        "authorName" : "jonson." ,
        "quoteNumber" : "seven." ,
        "quoteDescription" : "dream it , wish it , do it."
    },
    {
        "authorName" : "david." ,
        "quoteNumber" : "eight." ,
        "quoteDescription" : "sometimes later becomes never , do it now.",
    },
    {
        "authorName" : "alex." ,
        "quoteNumber" : "nine." ,
        "quoteDescription" : "Great things never come from comfort zones."
    },
    {
        "authorName" : "smith." , 
        "quoteNumber" : "ten." , 
        "quoteDescription" : "Don’t stop when you’re tired. Stop when you’re done.",
    }
];
// console.log(arrayOfObjectsOfQuotesContainer);
let quoteCont = document.getElementById("quoteContainer");
// console.log(quoteCont);
let generationBtn = document.getElementById("generationButton");
// console.log(generationBtn);
let oldNumber;
// console.log(oldNumber);
function testingQuoteNumberAndDisplayingRandomQuote(){
    let quoteNumber = Math.floor(Math.random() * arrayOfObjectsOfQuotesContainer.length);
    // console.log(quoteNumber);
    while(quoteNumber == oldNumber){
        quoteNumber = Math.floor(Math.random() * arrayOfObjectsOfQuotesContainer.length)
    }
    oldNumber = quoteNumber;
    // console.log(quoteNumber);
    let quoteCont = document.getElementById("quoteContainer");
    // console.log(quoteCont);
    quoteCont.style.display = "block";
    quoteCont.classList.add("my-4");
    generationBtn.classList.add("mt-3")
    let authorName = document.getElementById("authorName");
    // console.log(authorName);
    // authorName.style.padding = "5px";
    authorName.classList.add("p-1");
    authorName.innerHTML = `the author name is ${arrayOfObjectsOfQuotesContainer[quoteNumber].authorName}`;
    // console.log(authorName);
    let quoteNum = document.getElementById("quoteNumber");
    // console.log(quoteNum);
    // quoteNum.style.padding = "5px";
    quoteNum.classList.add("p-1");
    quoteNum.innerHTML = `the quote number is ${arrayOfObjectsOfQuotesContainer[quoteNumber].quoteNumber}`;
    // console.log(quoteNum);
    let quoteDescription = document.getElementById("quoteDescription");
    // console.log(quoteDescription);
    // quoteDescription.style.padding = "5px";
    quoteDescription.classList.add("p-1");
    quoteDescription.innerHTML = `the quote desciption is ${arrayOfObjectsOfQuotesContainer[quoteNumber].quoteDescription}`;
    // console.log(quoteDescription);
};
// testingQuoteNumberAndDisplayingRandomQuote();
generationBtn.addEventListener("click" , testingQuoteNumberAndDisplayingRandomQuote);
