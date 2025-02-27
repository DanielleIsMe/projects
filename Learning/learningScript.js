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

//There's another powerful way of getting array-like lists 
// of elements, and that's with the querySelectorAll() method.
//querySelectorAll() works with both tag and class names

//querySelectorAll() can also be used to look for specific element 
// like h3, with a class name of news.

function displayItems() {
    const el = document.querySelectorAll("h3.news");
    const p = document.querySelector("p");
    p.innerText = el.length;
}

//The querySelectorAll() lets us do more advanced searches, like accessing 
// elements of two different classes at the same time.

//In this example, we're looking for elements of either class movie or tech.
//use a comma between each class in the brackets to search for multiple classes.

function displayItems() {
    const el = document.querySelectorAll(".movie, .tech");
    const p = document.querySelector("p");
    p.innerText = el.length;
}

//We can even combine selectors like classes, tags, or IDs

function displayItems() {
    const el = document.querySelectorAll(".movie, #tech, button");
    const p = document.querySelector("p");
    p.innerText = el.length;
}

//querySelectorAll() allows us to select all elements and not just one like querySelector()

//With buttons, programs change webpages based on user behavior. For example, 
// clicking Next can run code that cycles through characters.

//We've seen how to change the text of an HTML element. Let's now learn how to 
// change HTML attributes with JavaScript.

//Once we've accessed an element with JavaScript, we can get its attributes by adding a . followed by the attribute name.

//For example, after we've stored an img element inside the el variable, we write el.src to get the attribute value.

function showAttribute() {
    const el = document.querySelector("img");
    const paragraph = document.querySelector("p");
    paragraph.innerText = el.src;
   }

//this function will pull the attribute value for the img element and display it in the p element.

//Most attributes can be accessed this way.

//We can also update attribute values. When doing so, we have to remember to place values in between quotes.

function changeAttribute() {
    const el = document.querySelector("img");
    el.src = "https://mimo.app/r/kittles.png";
   }

//this function will pull the img element and set the src attribute to a new image.

//We can even use attributes to change how elements work and behave on a webpage.

function changeQuestionType() {
    const el = document.querySelector("input");
    el.type = "checkbox";
}

//this function will pull the input element and change it's type attribute to checkbox.

//To access an element's styling, we first have to add the style attribute. We can then specify the exact style we want, like .color.
//If we want to change an element's style, we have to make sure we put the value in between quotes.

function changeColor() {
    const el = document.querySelector("p");
    el.style.color = "#d7465f";
}

//If we have properties with multiple words like background-color, we have to turn them into camel case. Here, we'll use backgroundColor.

function changeColor() {
    const el = document.querySelector("p");
    el.style.backgroundColor= "#d7465f";
}

//Changing the style with JavaScript works no matter if the previous style was set inline or through a stylesheet.

//we can show an elements style attribute by pullingthe value from an element.

function showColor() {
    const el = document.querySelector("p");
    const div = document.querySelector("div");
    div.innerText = el.style.backgroundColor;
}

//We've seen how we can change HTML attributes. There's also a quicker way to do this with JavaScript methods.

//To get an attribute's value we can use the getAttribute() method. We place the element first, followed by . and getAttribute().

function displayAttribute() {
    const img = document.querySelector("img");
    const imageLink = img.getAttribute();
}

//Inside the parentheses, we specify any attribute we want to get. Here, we'll code src inside quotes to get the image source.

function displayAttribute() {
    const img = document.querySelector("img");
    const imageLink = img.getAttribute("src");
}

//We can confirm we got the value by printing the imageLink variable in the p of our index.html file.

function displayAttribute() {
    const img = document.querySelector("img");
    const imageLink = img.getAttribute("src");
    p.innerText = imageLink
}

//getAttribute() also works if we want to get all the values of a given attribute, like the multiple style values.

function displayAttribute() {
    const el = document.querySelector("a");
    const linkStyles = el.getAttribute("style");
    const p = document.querySelector('p');
    p.innerText = linkStyles;
}
//this will display all of the values in the style attribute.

//aside from pulling attributes, we can also set or update attributes using the setAttribute() expression.
//in the parentheses, we have to specify which attribute we want to set, and then the value of the attribute, seperated by a comma.

function displayAttribute() {
    const img = document.querySelector("img");
    const imageLink = img.getAttribute("src");
    const p = document.querySelector('p');
    p.innerText = imageLink;
    img.setAttribute("src" , "https://mimo.app/r/kittles.png");
}
//this will update the src attribute inside of our img element, and display a new picture.

//There's a reason why we haven't used setAttribute() to set classes. If we use it to change a class, it overrides the previous class.
//There's a better way to add and remove classes and it's with a property called classList.

//Inside the add() method, we code the class we want to add to the element.
function addBold() {
    const el = document.querySelector("p");
    el.classList.add("bold");
    //classes can also be removed from an element. to remove a class, we code the remove() method.
    el.classList.remove("bold");
    //If we want to automatically add or remove a class when we call the function, we can use the toggle() method.
    el.classList.toggle("bold");
    //We can also add multiple classes to an element at the same time. this also works for removing and toggling.
    el.classList.add("bold", "underline");
}

//A library stores book and allows us to borrow them to use ourselves. this concept also exists in JavaScript! we can borrow code written by other people to use in our own projects, and we can also contribute with our own code for others to use.
//other coders may feel that the code they write can help others. JavaScript libraries contain code for public use.
//Libraries are usually stored in Content Delivery Network (CDN) . CDN is a network that delivers web content quickly by serving it from a nearby server.
//SEE SCRIPT ELEMENT IN index.html FOR CONT.
//Libraries help us save time by using a solution that has already been written by other coders.

//With libraries, we can use the solution that someone else coded to solve a problem we're encountering.
//Each library is different. When we use a library, we have to check the documentation to know how to use the functions it provides.

//To use code from libraries, we need to find the function from the documentation and use it where we need it.
//in the below example, "conversion" is the name of the library and ".kgToLb(50)" is the name of the function with the desired value in parentheses.

conversion.kgToLb(50);

//Another benefit of libraries is that problems are usually quickly fixed by their users.  for example, if the above value was a string, someone may have already thought about that case and provided a fix.

//always check the documentation of a library to see what kinds of functions are available in a CDN library.

//when we create a variable, we ASSIGN it a value, like assigning 3 to the wallet variable below.

let wallet = 3;
//self-assignment is when set a variable to it's own value. for example, setting wallet to wallet.
wallet = wallet;
//since we can self assign variables, we can increase or decrease variables set to numbers like below
wallet = wallet + 1;
console.log(wallet);
//this console log will read out the value 4.
//self-assigning variable lets us track data that changes over time. for example, a user might add 1 to a wallet, and then subtract 2 later.  this is an extremely powerful function.
wallet = wallet - 2;
console.log(wallet);
//this log will read out as 2

//variables set to strings work the same way, like below

let login = "Account Name: ";
login = login + "Elton ";
login = login + "john";
console.log(login);
//this console log will read out as "Account Name: Elton John"

//rather than rewriting the variable name again in our code, we can use the add += operator to add a number.
wallet += 1;
console.log(login);
//the console log should read 3

//to subtract from a variables value, we use the subtract -= operator.

wallet -= 1;
console.log(wallet);
//the console log should read 2 again.

//the increment operator ++, when placed after a variables name, should increase its value by one.

wallet ++
console.log(wallet);
//console log will read 3.

//we can SUBTRACT one from a value using the decrement operator, --

wallet --;
console.log(wallet);
//console should read 2

//programs repeat the same lines of code over and over again to build all kinds of things.
//one way for us to repeat lines of code is to write them multiple times.
console.log(wallet);
console.log(wallet);
console.log(wallet);
console.log(wallet);
console.log(wallet);
//obviously, this isnt ideal and can take a very long time with larger programs.

//to build large programs and sites, we can repeat lines of code by instead using a While Loop.
while (true) {
    console.log(wallet);
}
//this expression will repeat the wallet variable in the console for as long as the specified value is true.
//if a While Loops condition stays true forever, it is called an infinite loop, because it will loop forever.
//since we cant show infinite messages in the console using the above, it will crash our program.

//in order to stop a while loop from repeating forever, we can start by declaring a variable

let keepGoing = true;
//we use the variable in the condition to determine whether the while loop should run its code.
while (keepGoing === true) {
    console.log(keepGoing);
    //inside the code block, we can set the keepGoing variable to false so that the condition returns false.
    keepGoing = false;
    console.log(keepGoing);
    //the loop runs its entire code block because the keepGoing variable is true at first, but doesnt run it a second time because we set it to false
}

//the Math operator can be used for a number of things.  in the case below, we are going to use it to generate a random number between 1 and 100.
let randomNumber = Math.floor(Math.random() * 100) + 1;
//Math.floor will round down and return the largest number less than or equal to a given number.  in this case, we use MAth.floor to force the random function to return only a whole number.
//Math.random generates a random decimal number between 0(inclusive) and 1(exclusive).  we have multiplied this by 100, therefore the function will return a whole number between 0 and 99.
//adding 1 to this variable shifts the range to include 100.

//It's possible to control the number of times that a while loop can repeat.
//to do this, we need to start with a variable set to a number.

let counter = 1;
//then we use a comparison in the while condition to compare the counter variable to a number, like below.
while (counter < 4) {
    console.log(counter);
    //inside the code block, we can make the condition return false and stop the loop by incrementing the counter variable.
    counter++;
    //this will increase the counter variable's value by 1, and will stop the loop from running once it reaches 4.
}
//changing the condition tewlls the while loop when to stop running it's code.
while (counter < 10) {
    console.log(counter);
    counter++;
}
//instead, this loop will run until the counter variable equals 10.
//changing the counter variable's value here will change when the while loop starts.
counter = 5
while (counter < 10) {
    console.log(counter);
    counter++;
}
//this loop will begin from 5 and stop once it prints 9.

//since the whole block runs while the condition is true, the order we write code affects what the console will display.
counter = 5
while (counter < 10) {
    counter++;
    console.log(counter);
}
//incrementing the counter variable before printing it in the console will cause it to display 6 to 10 instead of 5 to 9.

//we know how to repeat code using a while loop.  using FOR loops instead, we can rewrite the same program to make it easier for other programmers to understand.
//to create a for loop, we start with the below.
for () {

}
//a for loop lets us create a variable inside of the condition.
for (let counter = 1;) {

}
//a common name for a counter variable is "i", standing for "index"
for (let i = 1;) {

}
//after the semicolon, we can place a condition like i < 5
for (let i = 1; i < 5;) {

}
//finally, we can increment the variable using ++
for (let i = 1; i < 5; i++) {
    console.log(i)
}
//this for loop will print 1 to 4 in the console.
//for loops are far easier to read because the information for the times the loop repeats is inside the parentheses.

//we previously made a for loop than counts upward from 1 to 4.  we can also make a for loop that counts down from 5 to 1.
//this is easy. all we need to do is start the variable from a number like 5.
//then we add the condition, like i > 0.
//finally, we decrement the number in the iterator instead of incrementing it, with --
for (let i = 5; i > 0; i--) {
    console.log(i);
}
//this loop will print 5 to 1, stopping when i is no longer greater than 0.
//if we want to include 0 when counting down, we can use the >= operator instead.
for (let i = 5; i >= 0; i--) {
    console.log(i);
}
//this loop will print 5 to 0.

