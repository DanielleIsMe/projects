//let and const are used to declare variables. let is used to declare variables that can be reassigned, 
//while const is used to declare variables that cannot be reassigned.
//semicoolons are used to end a statement.

//if a value is a string, it must be enclosed in quotes.
//for example, the variable windyCity is sotring the value "Chicago"

//if we try to update a const variable, we will get an error.
const windyCity = "Chicago";
windyCity = "New York";
//we can make it obvious that a variable is a const by using all caps for the variable name.
const WINDY_CITY = "Chicago";
//we can't use camel case if we use uppercase letters for a const variable, so we use snake case instead.

//we can update let variables by using the assign operator "="
let nameFirst = "Danielle";
nameFirst = "Anya";
//we can update let variables as often as we want.

//let and const (constant) are both useful variables, but const is more secure because it 
//prevents reassignment.

//lines of code are instructions for the computer to follow.
//when we run code, we are telling the computer to follow the instructions we put together.
//the order of the code is important because the computer reads the code line by line.

//with the special instruction console.log, we can print a message to the console.
console.log("Hello, world!");
//we can use this instruction as often as we want. the computer displays every value on a line
//in the console.
console.log("3, 2, 1");
console.log("GO!");
//we can use console.log to display variables, too.
console.log(nameFirst);
//when we display variables in the console, the values appear instead of the variable names.

//we can also give variables the values of other variables by setting one variable to another.
let defaultStatus = "Women Pretty";
let currentStatus = "Practicing JS";

currentStatus = defaultStatus;
console.log(currentStatus);
//when we update a variable it forgets its previous value.

//we can add string values together with a + sign.
"Followers: " + "55";
//We call adding together string values an expression because it creates a single string value.
//When expressions contain variables, they use the values in the variables.
const NUMER_OF_FOLLOWERS = "55";
//we can also use variables in expressions.
console.log("Followers: " + NUMBER_OF_FOLLOWERS);
//we can use the above console.log() to see the result of the expression.
//the above console.log() will display "Followers: 55"

//there are other kinds of values, too. like numbers, which don't need quotes.
const NUMBER_OF_LIKES = 5+1;
//Numbers make it easier to keep track of numeric values. 
//For example, the number of likes on a Facebook post.

//we can also use numbers in expressions, as above.
console.log(NUMBER_OF_LIKES);
//the above console.log() will display 6.

//We use the * sign to multiply numbers and the / sign to divide numbers.
const PERCENT = 0.5 * 100;
console.log(PERCENT);
//the above console.log() will display 50.

//When we store numbers in variables, we can use the variables for calculations, too.
const NUMBER_OF_STEPS = 70;
console.log("You're on step:");
console.log(NUMBER_OF_STEPS + 1);
//the above console.log() will display "You're on step:" and "71".

//Since expressions become values, we can store calculation results in variables.
const PRIVATE = 3;
const PUBLIC = 10;
const TOTAL = PRIVATE + PUBLIC;
console.log("Total posts: " + TOTAL);
//the above console.log() will display "Total posts: 13".

//There's a special value that's neither a string nor a number: true.
//There are no quotes around it, and it's not a numeric value.
//true and false is great for situations like checking if a switch is on or if a feature is enabled.
const CORRECT = true;
console.log(CORRECT);
//the above console.log() will display true.

//false is another special value and the opposite of true.
//We can use it like true.

console.log("Device charged");
const STATUS = false;
console.log(STATUS);
//the above console.log() will display false.

//A ! sign in front of true makes the expression result in false. If something is not true, it has to be false.
//The ! sign is the negation operator. It turns values into their opposite.
//When we change a value to its opposite with !, we negate it.
console.log(!true);
//the above console.log() will display false.

console.log(!false);
//the above console.log() will display true.

//We can use the ! (negation) operator with variables to negate the values they store.
const IS_MORNING = true;
console.log(!IS_MORNING);
//the above console.log() will display false.

//We can save a whole negation in another variable, too.
const IS_EVENING = !IS_MORNING;
console.log(IS_EVENING);
//the above console.log() will display false.

//To compare if two numbers are the same, we use the equality operator, ===.
//The equality operator checks if two values are the same.
//If they are, the expression results in true. If they're not, the expression results in false.
console.log(10===10);
//the above console.log() will display true.

console.log(10===5);
//the above console.log() will display false.

//we can use variables in expressions with the equality operator, too.
console.log(NUMBER_OF_STEPS===80);
//the above console.log() will display false.

//To check if a number isn't equal to another number, we use the inequality operator, !==.
//The inequality operator checks if two values are different.
//If they are, the expression results in true. If they're not, the expression results in false.
console.log(79!==80);
//the above console.log() will display true.

//We can use variables in expressions with the inequality operator, too.
console.log(NUMBER_OF_STEPS!==70);
//the above console.log() will display false.

//We can store the result of a comparison with the inequality operator in a variable.
const RESULT = 1 !== 2;
console.log(RESULT);
//the above console.log() will display true.

//variables can store the result of equality comparisons too.
const EQUAL = 1 === 2;
console.log(EQUAL);
//the above console.log() will display false.

//We can compare values with variables and variables with other variables.
const ONE = 1;
const TWO = 2;
console.log(ONE === TWO);
console.log(ONE !== TWO);
//the above console.log()'s will display false and true.

//We can use comparisons to check if a number is less than or greater than another number.
//The less than operator, <, checks if a number is less than another number.
//If it is, the expression results in true. If it's not, the expression results in false.
console.log(1 < 2);
//the above console.log() will display true.

console.log(2 < 1);
//the above console.log() will display false.
//We can use variables in expressions with the less than operator, too.
console.log(ONE < TWO);
//the above console.log() will display true.

//We can store the result of a comparison with the less than operator in a variable.
const LESS_THAN = 1 < 2;
console.log(LESS_THAN);
//the above console.log() will display true.

//To check if a number is greater than another number, we use the greater-than operator, >.
//The greater-than operator checks if a number is greater than another number.
//If it is, the expression results in true. If it's not, the expression results in false.
console.log(2 > 1);
//the above console.log() will display true.

console.log(1 > 2);
//the above console.log() will display false.

//We can use variables in expressions with the greater-than operator, too.
console.log(TWO > ONE);
//the above console.log() will display true.

//We can store the result of a comparison with the greater-than operator in a variable.
const GREATER_THAN = 2 > 1;
console.log(GREATER_THAN);
//the above console.log() will display true.

//We can compare numbers with the less-than-or-equal-to operator, <=.
//The less-than-or-equal-to operator checks if a number is less than or equal to another number.
//If it is, the expression results in true. If it's not, the expression results in false.
console.log(1 <= 2);
//the above console.log() will display true.

console.log(2 <= 2);
//the above console.log() will display true.

console.log(2 <= 1);
//the above console.log() will display false.

//We can use variables in expressions with the less-than-or-equal-to operator, too.
//We can also check if a number is greater than or equal to another number with the 
// greater-than-or-equal-to operator, >=.

//We can also use comparisons to check if a string is equal to or not equal to another string.
//The equality and inequality operators work with strings, too.
console.log("Hello" === "Hello");
//the above console.log() will display true.

//We can also compare variables that store strings with each other.
const GREETING = "Hello";
console.log(GREETING === "Hello");
//the above console.log() will display true.

//We've already seen and used a lot of different kinds of values. In programming lingo, 
// these different kind of values are called types.
//There are three main types of values: strings, numbers, and booleans.
//Numbers are used for calculations, strings are used for text, and booleans are used for conditions.

//When storing a type in a variable, we say that we assign a value to a variable.

//+ is the joining or adding sign. When joining two variables, 
//we can get different results depending on their types.

//When joining numbers with strings, the number will be automatically transformed into a string.
//This is called type coercion.
const NUMBER = 5 + "5";
console.log(NUMBER);
//the above console.log() will display "55".

//Adding a number to a string also works when we use a variable
//that stores a number, instead of a numeric value.

//We can also join strings and booleans.

//The AND operator && returns true only if all the conditions are true.
//If one of the conditions is false, the expression will result in false.
let isBatteryOn = true;
let isSwitchOn = true;
console.log(isBatteryOn && isSwitchOn);
//the above console.log() will display true.
//When operands and operators compute a boolean value together, it forms a logical expression

//You can also store the result of a logical expression in a variable.
const IS_ON = isBatteryOn && isSwitchOn;
console.log(IS_ON);
//the above console.log() will display true.

//the OR operator || returns true as long as at least one of the conditions is true.
isBatteryOn = true;
isSwitchOn = false;
console.log(isBatteryOn || isSwitchOn);
//the above console.log() will display true.

//We can use ! to negate logical expressions as well. 
//To do that, we place the logical expression between parentheses.
isBatteryOn = true;
isSwitchOn = false;
console.log(!(isBatteryOn || isSwitchOn));
//the above console.log() will display false.

//we can write code that adapts to different situations by using the If statement.
//The If statement checks if a condition is true. If it is, the code inside the block runs.
//If it's not, the code inside the block doesn't run.

if (IS_ON) {
    console.log("The light is on.");
}
//the above console.log() will display "The light is on."

//if the boolean value is false, the code inside the block is skipped.
//Values like true and false are called conditions. Statements relying on conditions are called conditionals.

//if statements don't decide on skipping or running 
//the entire code. They only make decisions about a piece of code.
//This piece of code is called a code block. We write it between curly braces {}.

//A code block can be more than a one-liner. We can add as many lines as we want.
if (IS_ON) {
    console.log("The light is on,");
    console.log("But no-one is home.");
}
//the above console.log() will display "The light is on," and "But no-one is home."

//To make smarter decisions in our programs, we need if statements that rely on smarter conditions.
//we can use operators to check if an input is true or not.

let answer = "Picasso";
if (answer === "Picasso") {
    console.log(answer + " is correct!");
}
//the above console.log() will display "Picasso is correct!"

//if an input isn't true, we can use !== to check if it's false.
answer = "Matisse";
if (answer !== "Picasso") {
    console.log(answer + " is wrong!");
}
//the above console.log() will display "Matisse is wrong!"

//If statements work with all comparison operators we've used so far.
//We can use <, >, <=, >=, ===, and !== in if statements.
//if statements also can use === to compare variables to boolean values.

let isDay = true;
if (isDay === true) {
    console.log("lights off!");
}
//the above console.log() will display "lights off!"

//To use the result of a comparison multiple times, we can store it in a variable.
let score = 51;
let pass = score > 50;
if (pass) {
    console.log("You passed!");
}
//the above console.log() will display "You passed!"

//Great software doesn’t just decide what to do when a condition is true, 
// it also has a back-up plan if the condition is false.

//we can add another If statement that runs different code when the condition is false.
let condition = true;
if (condition) {
    console.log("1");
}
if (!condition) {
    console.log("2");
}
//the above console.log() will display "1".

//Instead of creating two if statements, we use an if / else statement to achieve the same result.
condition = false;
if (condition) {
    console.log("1");
}
else {
    console.log("2");
}
//the above console.log() will display "2".
//The else statement of an if / else statement always goes at the end.
//the else statement does not need a condition. It's a default response that 
// runs when the if statement's condition is false.

//for more specific conditions, we can use else if statements.
let hour = 14;
if (hour < 12) {
    console.log("Good morning");
} else if (hour <17) {
    console.log("Good afternoon");
}
//the above console.log() will display "Good afternoon".
//We call this an else if statement. 
// This statement runs its code block if the condition before it is false and hour < 17 is true.


//We can code an else statement to run its code block when the if and else if conditions are false.
hour = 18;
if (hour < 12) {
    console.log("Good morning");
} else if (hour <17) {
    console.log("Good afternoon");
} else {
    console.log("Good evening");
}
//the above console.log() will display "Good evening".
//The else statement is the last resort. It runs when all other conditions are false.
//As long as they go before the Else statement, we can add as many else if statements as we want.

hour = 18;
if (hour < 12) {
    console.log("Good morning");
} else if (hour <17) {
    console.log("Good afternoon");
} else if (hour <21){
    console.log("Good evening");
} else {
    console.log("Good night");
}
//the above console.log() will display "Good night".

//Instead of creating lots of different code, websites use 
// functions to group related code and perform the task in one place.

//We can create a function by using the function keyword, followed by the function name.
function greetUser () {
    console.log ("Hello Danielle,");
    console.log ("Welcome back!");
}
//the braces mark the code block that runs when we call the function.

//to run this code, we need to call the function. We do this by writing the function 
// name followed by parentheses.
greetUser();

//Behind every dynamic website, there's some JavaScript code.
//The script element is the last element before the closing </body> tag in the HTML structure.
//Similar to CSS, we use a separate file to write JavaScript. 
// To do this, we include a src attribute that links to the file we want to use.

//If we want to retrieve an individual HTML element, 
// we can use the querySelector() method from document.
//To select a specific element, we add a selector inside parentheses. 
// We can use an HTML tag, like the p tag if we want to get the paragraph.

//querySelector() works with all selectors, like tags, classes, and ID's. 
// If we're looking for an ID, we add the # at the beginning.

//querySelector() only retrieves the first element it finds.

function skynet() {
    const paragraph = document.querySelector("p");
    console.log(paragraph);
}

//If several elements share a class, like .prompt here, we can specify its tag.
//We specify p.prompt inside parentheses to select the paragraph with the .prompt class.

function skynet() {
    const paragraph = document.querySelector("p.prompt");
    console.log(paragraph);
}

//We can also look for an element that has multiple classes. 
// Before we can see that work, add the class name update to the second paragraph.

function skynet() {
    const paragraph = document.querySelector("prompt.update");
    console.log(paragraph);
}

//what if we want to access more than one element at a time? 
// For example, what if we wanted to count items in a list?
//We can get a collection of elements of the same tag type 
// with getElementsByTagName().

function skynet() {
    const listItems = document.getElementsByTagName("li");
    console.log(listItems);
}

//Collections are similar to arrays. 
// They work with indices that start from 0.
//Just like arrays, we can also access the length property of the collection.

function skynet() {
    const listItems = document.getElementsByTagName("li");
    console.log(listItems.length);
}

//If we want to return a collection that contains specific elements of a class, 
// we can use the getElementsByClassName() method instead.

function skynet() {
    const listItems = document.getElementsByClassName("update");
    console.log(listItems);
}

//Since getElementsByClassName() also returns a collection, 
// we can then access each element through the index

function skynet() {
    const el = document.getElementsByClassName("urgent");
    const p = document.querySelector("p");
    p.innerHTML = el[0].innerHTML;
}

//To access multiple elements that have more than one class, 
// we just add the classes with a space in between.

function skynet() {
    const el = document.getElementsByClassName("urgent update");
    console.log(el);
}

