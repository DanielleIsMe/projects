//UNIT CONVERSION

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

function clearString() {
    document.getElementById("result").innerHTML = "";
    //even though we previously declared the inputElement variable, it cannot be used 
    //outside of the convert() function code block.
    //to use the inputElement variable in the clearString() function, we need to declare it again.
    const inputElement = document.getElementById("input");
    inputElement.value = "";
}

//SKILLS TOTAL

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

//MODAL FORM TO FOCUS ON AN IMAGE

//modal constant pulls div element containing img and span element
const modal = document.getElementById("modal");
//pulls the img element in our modal div
const modalContent = document.getElementById("modalContent");
//img in parentheses ensure we are pulling the image that we clicked on.
function showModal(img) {
    //modal is set to none so we cannot see it, then once the function is triggered it is set to block.
    modal.style.display = "block";
    //we pull the img we clicked on to display in the modalContent img element
    modalContent.src = img.src;
}

function hideModal() {
    //sets modal display back to none so that it disappears
    modal.style.display = "none";
}