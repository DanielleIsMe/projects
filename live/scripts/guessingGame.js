let randomNumber = Math.floor(Math.random() * 100) + 1;

function guess() {
    //because the inputElement pulling my input id interprets the value as a string, we need to convert it to an integer using parseInt().
    let inputElement = parseInt(document.getElementById("input").value);
    let feedbackElement = document.getElementById("feedback");

    if (inputElement === randomNumber) {
        feedbackElement.innerHTML = "Congratulations! You guessed correctly."
        feedbackElement.style.color = "green"
    } else if (inputElement < randomNumber) {
        feedbackElement.innerHTML = "Too low, sorry! Try again."
    } else {
        feedbackElement.innerHTML = "Too high, sorry! Try again"
    }
    console.log(randomNumber);
}