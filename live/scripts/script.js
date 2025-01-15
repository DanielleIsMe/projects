//to tell html elements how to respond, we need to identify them.
//to identify them, we use the id attribute in our html file.
//then, we can access the HTML elements of our webpage using 
// the document keyword. document represents our webpage.
//Now, to interact with an HTML element, we need the document.getElementById() instruction.
function showSecret() {
    //we use the innerHTML property to change the content of an HTML element.
    const img = document.getElementById("secret")
    img.setAttribute("src" , "chewingcharacter.gif");
}
function hideSecret() {
    const img = document.getElementById("secret")
    img.removeAttribute("src" , "");
}

//logical expression function to convert a value in miles to kilometers and vice versa. this code
//block is responsible for the conversion of the values.
function convert() {
//getElementById() method returns the HTML element that has the ID attribute with the specified value.
//To access the input from a select element, we need to get the element and use .value. 
//We can use document.getElementById() to do that.
//Knowing how to get user input, we can use it to update a webpage like in this convert() function.
const selectElement = document.getElementById("unitSelect").value;
const inputElement = document.getElementById("input").value;
let milesToKm = selectElement === "1";
let result = 0;

if (milesToKm) {
    //toFixed() method formats a number using fixed-point notation, or rounding to a 
    // specified number of decimal places.
    result = (inputElement * 1.60934).toFixed(2) + " kilometers";
} else {
    result = (inputElement / 1.60934).toFixed(2) + " miles";
}

let resultString = inputElement + " miles is equal to " + result + ".";

if (milesToKm) {
    resultString = inputElement + " miles is equal to " + result + "!";
} else {
    resultString = inputElement + " kilometers is equal to " + result + "!";
}

console.log(resultString);

let resultElement = document.getElementById("result");
document.getElementById("input").value="";
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

function showSkillsTotal() {
    const li = document.getElementsByTagName("li")
    const p = document.querySelector("#resultSkillsTotal");
    p.innerText = li.length;
}

function hideSkillsTotal() {
    const p = document.querySelector("#resultSkillsTotal");
    p.innerText = "";
}

function adviceSubmission() {
    const review = document.getElementById("adviceText")
    const adviceThanks = document.getElementById("feedbackThanks")
    //something in here eventually to submit feedback to a DB maybe?
    review.value=""
    adviceThanks.innerHTML = "Thank you for your feedback!"
}

//MODALS
const modal = document.getElementById("modal");
const modalContent = document.getElementById("modalContent");
const thumbnail = document.querySelector(".thumbnail");

function showModal() {
    modal.style.display = "block";
    modalContent.src = thumbnail.src;
}

function hideModal() {
    modal.style.display = "none";
}