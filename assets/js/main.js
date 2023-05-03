/****************** FUNCTIONS ******************/

// Create HTML Elements
function createElement(tag, id, classes, content) {
    const element = document.createElement(tag);
    element.setAttribute("id", id);
    element.setAttribute("class", classes);
    element.innerText = (content);
    return element;
}

// Create Random Numbers
function getRandomNumber(min, max) {
    let number = Math.floor(Math.random() * (max - min + 1) + min);
    return number;
}

// Ask user to input numbers and put them into an array
function askNumbers(){
    do {
        let numberToInsert = userInput.length + 1;
        let inputSingleNumber = Number(prompt(`Write the ${numberToInsert}° numbers here:`));
        if (inputSingleNumber > 0 && inputSingleNumber != null && userInput.includes(inputSingleNumber) === false) {
            userInput.push(inputSingleNumber);
        }
    } while (userInput.length < 5);
    console.log("User input these numbers:", userInput);
}

/****************** VARIABLES ******************/
const mainTitle = document.getElementById('title');
const mainText = document.getElementById('numbers');
const randomNumbers = [];
const userInput = [];

/****************** INIT ******************/

// Create Random Numbers
do {
   let singleNumber = getRandomNumber(1, 100);
    if (randomNumbers.indexOf(singleNumber) === -1) randomNumbers.push(singleNumber); 
    // indexOf() is a method that returns -1 if the value is not found inside Array. Avoid double numbers 
} while (randomNumbers.length < 5);
console.log("Array created:", randomNumbers);

// Add Random Numbers on Web Page
mainText.innerText = `Can you remember these numbers in thirty seconds: ${randomNumbers.join(" - ")} ?`;

// Hide Numbers from page after 30 seconds
setTimeout(() => mainText.style.display = "none", 5 * 1000); // After debug, change timeout with 30sec

// Ask user numbers after 31 seconds 
setTimeout(() => {
    askNumbers();
}, 6 * 1000); // After debug, change timeout with 31sec


/****************** EVENTS ******************/