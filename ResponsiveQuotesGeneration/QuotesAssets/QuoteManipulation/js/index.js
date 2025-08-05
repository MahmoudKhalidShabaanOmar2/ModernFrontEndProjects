var differentQuotesContainer = [
    {
        "authorName" : "john.",
        "quoteNumber" : "one.",
        "quoteDescription" : "Believe in yourself.",
    },
    {
        "authorName" : "david.",
        "quoteNumber" : "two.",
        "quoteDescription" : "Success is not final, failure is not fatal.",
    },
    {
        "authorName" : "mark.",
        "quoteNumber" : "three.",
        "quoteDescription" : "Do one thing every day that scares you.",
    },
    {
        "authorName" : "marcos",
        "quoteNumber" : "four.",
        "quoteDescription" : "Stay hungry, stay foolish.",
    },
    {
        "authorName" : "john.",
        "quoteNumber" : "five.",
        "quoteDescription" : "Your limitation—it’s only your imagination.",
    },
    {
        "authorName" : "joe",
        "quoteNumber" : "six.",
        "quoteDescription" : "Push yourself, because no one else is going to do it for you.",
    },
    {
        "authorName" : "jonson",
        "quoteNumber" : "seven",
        "quoteDescription" : "Dream it. Wish it. Do it.",
    },
    {
        "authorName" : "david.",
        "quoteNumber" : "eight.",
        "quoteDescription" : "Sometimes later becomes never. Do it now.",
    },
    {
        "authorName" : "alex.",
        "quoteNumber" : "nine.",
        "quoteDescription" : "Great things never come from comfort zones.",
    },
    {
        "authorName" : "smith.",
        "quoteNumber" : "ten",
        "quoteDescription" : "Don’t stop when you’re tired. Stop when you’re done.",
    },
];
// console.log(differentQuotesContainer);
// console.log(differentQuotesContainer[0]);
// console.log(differentQuotesContainer[0].authorName);
// console.log(differentQuotesContainer[0].quoteNumber);
// console.log(differentQuotesContainer[0].quoteDescription);
// console.log(differentQuotesContainer.length);
var quoteCont = document.getElementById("quoteContainer");
// console.log(quoteCont);
var generationBtn = document.getElementById("generationButton");
// console.log(generationBtn);
// generationBtn.addEventListener("click" , function(){
//     quoteCont.style.display="block";
// });
var oldNumber;
// console.log(oldNumber);
function testingQuoteNumberAndGenerattingNewRandomQuote(){
    var quoteNumber = Math.floor(Math.random() * differentQuotesContainer.length);
    // console.log(quoteNumber);
    while(quoteNumber == oldNumber){
        var quoteNumber = Math.floor(Math.random() * differentQuotesContainer.length);
    };
    oldNumber = quoteNumber;
    // console.log(quoteNumber);
    var authName = document.getElementById("authorName");
    authName.style.padding="5px";
    // console.log(authName);
    authName.innerHTML = `the author name of the quote is : \"${differentQuotesContainer[quoteNumber].authorName}`+"\"";
    // console.log(authName);
    var quoteNum = document.getElementById("quoteNumber");
    quoteNum.style.padding="5px";
    // console.log(quoteNum);
    quoteNum.innerHTML = `the number of the quote is \"${differentQuotesContainer[quoteNumber].quoteNumber}`+"\"";
    // console.log(quoteNum);
    var quoteDesc = document.getElementById("quoteDescription");
    quoteDesc.style.padding="5px";
    // console.log(quoteDesc);
    quoteDesc.innerHTML = `the description of the quote is : \"${differentQuotesContainer[quoteNumber].quoteDescription}`+"\"";
    // console.log(quoteDesc);
};
// testingQuoteNumberAndGenerattingNewRandomQuote();
generationBtn.addEventListener("click" , function(){
    quoteCont.style.display="block";
    testingQuoteNumberAndGenerattingNewRandomQuote();
})