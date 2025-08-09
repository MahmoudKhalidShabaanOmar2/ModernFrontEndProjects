var fristHeading = document.getElementById("mainHeading");
// console.log(fristHeading);
var fristDescription = document.getElementById("mainDescription");
// console.log(fristDescription);
var userName = window.prompt("Please Enter The User Name Is : ");
// console.log(userName);
if(!userName){
    userName = "guest";
};
// console.log(userName);
function displayingMainDescription(){
    fristHeading.addEventListener("click" , function(){
        fristDescription.style.display = "block";
        fristDescription.innerHTML = `hello everyone! , and welcome \"${userName}\" to the responsive simple calculator , you can solve different mathimaticas eqquations by using the responsive simple calculator...`;
    });
};
displayingMainDescription();
var displayingUserVal = document.getElementById("displayingUserValue");
// console.log(displayingUserVal);
function appendUserValue(displayingValue){
    displayingUserVal.value += displayingValue;
}
// var calculatorButtons = document.querySelectorAll(".responsive-simple-calculator-container .responsive-simple-calculator-buttons-container .calculator-btn");
// console.log(calculatorButtons);
// for(var i=0 ; i<calculatorButtons.length;i++){
//     console.log(calculatorButtons[i])
// }
let divideButton = document.getElementById("divideBtn");
// console.log(divideButton);
divideButton.addEventListener("click" , function(){
    appendUserValue("/");
});
let multiplyButton = document.getElementById("multiplyBtn");
// console.log(multiplyButton);
multiplyButton.addEventListener("click" , function(){
    appendUserValue("*");
});
let modulusButton = document.getElementById("modulusBtn");
// console.log(modulusButton);
modulusButton.addEventListener("click" , function(){
    appendUserValue("%");
});
let additionButton = document.getElementById("additionBtn");
// console.log(additionButton);
additionButton.addEventListener("click" , function(){
    appendUserValue("+");
});
let subtractButton = document.getElementById("subtractBtn");
// console.log(subtractButton);
subtractButton.addEventListener("click" , function(){
    appendUserValue("-");
});
let dotButton = document.getElementById("dotBtn");
// console.log(dotButton);
dotButton.addEventListener("click" , function(){
    appendUserValue(".");
});
let zeroButton = document.getElementById("zeroBtn");
// console.log(zeroButton);
zeroButton.addEventListener("click" , function(){
    appendUserValue("0");
});
let oneButton = document.getElementById("oneBtn");
// console.log(oneButton);
oneButton.addEventListener("click" , function(){
    appendUserValue("1");
});
let twoButton = document.getElementById("twoBtn");
// console.log(twoButton);
twoButton.addEventListener("click" , function(){
    appendUserValue("2");
});
let threeButton = document.getElementById("threeBtn");
// console.log(threeButton);
threeButton.addEventListener("click" , function(){
    appendUserValue("3");
});
let fourButton = document.getElementById("fourBtn");
// console.log(fourButton);
fourButton.addEventListener("click" , function(){
    appendUserValue("4");
});
let fiveButton = document.getElementById("fiveBtn");
// console.log(fiveButton);
fiveButton.addEventListener("click" , function(){
    appendUserValue("5");
});
let sixButton = document.getElementById("sixBtn");
// console.log(sixButton);
sixButton.addEventListener("click" , function(){
    appendUserValue("6");
});
let sevenButton = document.getElementById("sevenBtn");
// console.log(sevenButton);
sevenButton.addEventListener("click" , function(){
    appendUserValue("7");
});
let eightButton = document.getElementById("eightBtn");
// console.log(eightButton);
eightButton.addEventListener("click" , function(){
    appendUserValue("8");
});
let nineButton = document.getElementById("nineBtn");
// console.log(nineButton);
nineButton.addEventListener("click" , function(){
    appendUserValue("9");
});
function clearingAppendUserValue(){
    displayingUserVal.value="";
};
let clearingButton = document.getElementById("clearingBtn");
// console.log(clearingButton);
clearingButton.addEventListener("click" , function(){
    clearingAppendUserValue();
});
function calculatingDifferentMathimaticasEquations(){
    try{
        displayingUserVal.value = eval(displayingUserVal.value);
    }
    catch{
        displayingUserVal.value = "mathimaticas syntax error."
    }
}
let equalsButton = document.getElementById("equalsBtn");
// console.log(equalsButton);
equalsButton.addEventListener("click" , function(){
    if(displayingUserVal.value.trim() === ""){
        displayingUserVal.value = "enter mathimaticas equation.";
        return;
    }
    calculatingDifferentMathimaticasEquations();

});
