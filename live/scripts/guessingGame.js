let randomNumber = Math.floor(Math.random() * 100) + 1;

function guess() {
    let inputElement = parseFloat(document.getElementById("input").value);
    let feedbackElement = document.getElementById("feedback");

    if (inputElement === randomNumber) {
        feedbackElement.innerHTML = "Congratulations! You guessed correctly."
    } else if (inputElement < randomNumber) {
        feedbackElement.innerHTML = "Too low, sorry! Try again."
    } else {
        feedbackElement.innerHTML = "Too high, sorry! Try again"
    }
    console.log(randomNumber);
}