//object from which the response is fetched
const response = {
  'weather': ['funny weather today! Quite cloudy..Good news is; rain is not falling.', 'Dude it is so gonna rain ..be sure to get an umbrella!', 'fret not brother..it is only the windy and nothing crazy like a tsunami or something', 'Get your self some SPF cus this sun is on puberty!', 'you should totes stay indoors today chad cus this hurricane is bad news'],
  'sports': ["Go eagles! we're onto the next one", "L...grow some cojones and DYR!!", "Talk about those Losers..they totally Flunked this one", "Hey you're in for some Action cus it's Gators vs Raptures  whooo hooo!",  "Spain vs Italy...and another bites the dust Italy 3 Spain 1! "],
  'fashion': ["Heh..what does a nerd like you need with Fashion", "hey i like any Jordans can't go wrong with a pair", "Nikes are hot in sale..try pulling a night shift and maybe you could afford one"]
};

const prompts = [
  'weather', 
  'sports',
  'fashion'
];


const inputField = document.getElementById('promt');
const outPuts = document.getElementById('outputs');


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

document.getElementById('generate-btn').addEventListener('click', sassyChatBot);


const pace = 100;

function textToTry(text, index){
if(index < text.length){
  setTimeout(() =>{
    textToType.textContent += text.charAt(index);
    textToTry(text, index + 1);
  }, pace);
}
}
document.getElementById('generate-btn').addEventListener('click', () =>{
  textToTry(outPuts.value, 0)
});

// Text to be displayed
const textToType = "Hi, i'm C2 (Your ChatBot) i can be either friendly or cruel sometimes, so keep ya head up soldier!";

// Delay between each character 
const delay = 100;

// Get the h1 element to display the typing text
const typingTextElement = document.getElementById("typing-text");

// Function to display the text with typing effect
function displayTextWithTypingEffect(text, index) {
  if (index < text.length) {
    // Add the next character to the typing text with delay
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

    
    