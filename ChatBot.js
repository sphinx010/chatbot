//chatbot code ;)

//object from which the response is fetched
const response = {
  'weather': ['funny weather today! Quite cloudy..Good news is; rain is not falling.', 'Dude it is so gonna rain ..be sure to get an umbrella!', 'fret not brother..it is only windy and nothing crazy like a tsunami or something', 'Get your self some SPF cus this sun is on puberty!', 'you should totally stay indoors today because this hurricane is bad news','quite the weather we have; cloudy and windy'],
  'sports': ["Go eagles! we're onto the next one", "L...grow some cojones and DYR!!", "Talk about those Losers..they totally Flunked this one", "Hey you're in for some Action cus it's Gators vs Raptors  whooo hooo!",  "Spain vs Italy...and another bites the dust Italy 3 Spain 1! ","Did you know that the first ever game of Basketball was played with a football?"],
  'fashion': ["Heh..what does a nerd like you need with Fashion", "hey i like any Jordans can't go wrong with a pair", "Nikes are hot in sale..try pulling a night shift and maybe you could afford one"]
};






const prompts = [
  'weather', 
  'sports',
  'fashion'
];




const inputField = document.getElementById('promt');
const outPuts = document.getElementById('outputs');




//Junk code, kept as reference 
function sassyChatBot(event) {
  event.preventDefault();
  const input = inputField.value
  if (prompts.includes(input) && response.hasOwnProperty(input)) {
    const randomizer = Math.floor(Math.random() * response[input].length);
    outPuts.value =  response[input][randomizer];
  } else {
    outPuts.value = "Looks like you're out of line, brodie. Try weather, sports, or fashion";
  }
}




let typing = false; // Flag variable to track if typing animation is in progress

function typeText(text) {
  return new Promise((resolve) => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < text.length) {
        outPuts.value += text.charAt(index);
        index++;
      } else {
        clearInterval(interval);
        resolve();
      }
    }, 50); 
  });
}



document.getElementById('generate-btn').addEventListener('click', async (event) => {
  event.preventDefault();
  const input = inputField.value;

  if (!typing) { // Checks if the typing animation is not still typing
    typing = true; // Sets typing to true to prevent multiple clicks
    
    outPuts.value = ""; // then clears the output field
    
    if (prompts.includes(input) && response.hasOwnProperty(input)) {//checks to make sure user input matches the obj prop and the resource arr
      const randomizer = Math.floor(Math.random() * response[input].length);
      const currentResponse = response[input][randomizer];
      
      await typeText(currentResponse); // Type the current response
    } else {
      outPuts.value = "Looks like you're out of line, brodie. Try weather, sports, or fashion";
    }

    typing = false; // Set typing back to false to allow the next click event
  }
});





// Text to be displayed
const textToType = "Hi, i'm C2 (Your ChatBot) and i'm here to assist you...ah..nice rhyme :)";

// Delay between each character 
const delay = 80;

// Got the h1 element to display the typing text
const typingTextElement = document.getElementById("typing-text");



// Function to display the text with typing effect
function displayTextWithTypingEffect(text, index) {
  if (index < text.length) {
    // Adds the next character to the typing text with delay
    setTimeout(() => {
      typingTextElement.textContent += text.charAt(index);
      displayTextWithTypingEffect(text, index + 1);
    }, delay);
  }
}



// Start the typing effect when the page loads
document.addEventListener("DOMContentLoaded", () => {
  displayTextWithTypingEffect(textToType, 0);
});



const button = document.querySelector('.but1'); 

button.addEventListener('keydown', () => {
  // Change display of :before pseudo-element
  const styleSheet = document.styleSheets[0]; // Assuming it's the first stylesheet
  for (let i = 0; i < styleSheet.cssRules.length; i++) {
    const rule = styleSheet.cssRules[i];
    if (rule.selectorText === '.but1:before') {
      rule.style.display = 'none';
      break; // Exit the loop when the rule is found
    }
  }
});

