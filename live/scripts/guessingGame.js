let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 10;

function guess() {

const inputElement = document.getElementById("input");
const feedbackElement = document.getElementById("feedback");
const guess = parseInt(inputElement.value);

while (attempts > 0) {
    attempts--;
    //because the inputElement pulling my input id interprets the value as a string, we need to convert it to an integer using parseInt().
    if (guess === randomNumber) {
        feedbackElement.innerHTML = "Congratulations! You guessed correctly.";
        feedbackElement.style.color = "green";
        break;
    } else if (guess < randomNumber) {
        feedbackElement.innerHTML = "Too low, sorry! You have " + attempts + " tries left.";
        feedbackElement.style.color = "red";
        break;
    } else {
        feedbackElement.innerHTML = "Too high, sorry! You have " + attempts + " tries left.";
        feedbackElement.style.color = "red";
        break;
    }
}
if (attempts === 0 && guess !== randomNumber) {
    feedbackElement.innerHTML = "Too bad! the correct answer was " + randomNumber;
    feedbackElement.style.color = "red";
}

}
