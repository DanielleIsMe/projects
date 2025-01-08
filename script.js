//to tell html elements how to respond, we need to identify them.
//to identify them, we use the id attribute in our html file.
//then, we can access the HTML elements of our webpage using 
// the document keyword. document represents our webpage.
//Now, to interact with an HTML element, we need the document.getElementById() instruction.
function show() {
    //we use the innerHTML property to change the content of an HTML element.
    document.getElementById("secret") .innerHTML = "Women are pretty <3";
}
function hide() {
    document.getElementById("secret") .innerHTML = "";
}

//logical expression function to convert a value in miles to kilometers and vice versa. this code
//block is responsible for the conversion of the values.
function convert() {
//getElementById() method returns the HTML element that has the ID attribute with the specified value.
const selectElement = document.getElementById("unitSelect");
//value property sets or returns the value of the value attribute of a text field.
const selectedValue = selectElement.value;
const inputElement = document.getElementById("input");
const inputValue = inputElement.value;
let milesToKm = selectedValue === "milesToKm";
let result = 0;

if (milesToKm) {
    //toFixed() method formats a number using fixed-point notation, or rounding to a 
    // specified number of decimal places.
    result = (inputValue * 1.60934).toFixed(2) + " kilometers";
} else {
    result = (inputValue / 1.60934).toFixed(2) + " miles";
}

let resultString = inputValue + " miles is equal to " + result + ".";

if (milesToKm) {
    resultString = inputValue + " miles is equal to " + result + "!";
} else {
    resultString = inputValue + " kilometers is equal to " + result + "!";
}

console.log(resultString);

let resultElement = document.getElementById("result");
resultElement.innerHTML = resultString;

}

//function to clear the result of the conversion.
function clearString() {
    document.getElementById("result").innerHTML = "";
    //even though we previously declared the inputElement variable, it cannot be used 
    //outside of the convert() function code block.
    //to use the inputElement variable in the clearString() function, we need to declare it again.
    const inputElement = document.getElementById("input");
    inputElement.value = "";
}