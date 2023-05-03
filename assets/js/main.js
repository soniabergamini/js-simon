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

/****************** VARIABLES ******************/
const mainTitle = document.getElementById('title');
const mainText = document.getElementById('numbers');
const randomNumbers = [];

/****************** INIT ******************/

// Create Random Numbers
do {
   let singleNumber = getRandomNumber(1, 100);
    if (randomNumbers.indexOf(singleNumber) === -1) randomNumbers.push(singleNumber); 
    // indexOf() is a method that returns -1 if the value is not found inside Array.
} while (randomNumbers.length < 5);
console.log("Array created", randomNumbers);

// Add Random Numbers on Web Page
mainText.innerText = `Can you remember these numbers in thirty seconds: ${randomNumbers.join(" - ")} ?`;

// Hide Numbers from page after 30 seconds
setTimeout(() => mainText.style.display = "none", 5 * 1000); // After debug, change timeout with 30sec

// Ask user numbers after 31 seconds 


/****************** EVENTS ******************/