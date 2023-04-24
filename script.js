// different types of answer possibilites depending on coffee type selected
const answers = {
  espresso: {
    positive: [
      "You got this!",
      "You can do anything",
      "Believe in yourself",
      "Go for it!",
      "Dream big"
    ],
    negative: [
      "It's not looking good",
    "Don't count on it",
    "Outlook not so good",
    "Better luck next time",
    "Maybe try a different strategy"
    ]
  },
  cappuccino: {
    positive: [
      "Great things are coming",
      "Stay positive",
      "Keep up the good work",
      "Your hard work will pay off",
      "You're amazing"
    ],
    negative: [
      "You might want to rethink your approach",
    "It's not a good time to make a change",
    "Things are uncertain at the moment",
    "Take a step back and reevaluate",
    "Consider a different path"
    ]
  },
  latte: {
    positive: [
      "There may be some bumps along the way, but stay hopeful",
      "Stay focused on your priorities and you'll find success",
      "You have the ability to turn things around",
      "Keep working hard and you'll achieve your goals",
      "Stay determined and you'll overcome any obstacles"
    ],
    negative: [
      "The odds are against you",
    "It's unlikely to work out",
    "Don't get your hopes up",
    "Prepare for disappointment",
    "You might want to lower your expectations"
    ]
  },
  americano: {
    positive: [
      "It may not be easy, but stay motivated and you'll get there",
      "Don't let setbacks discourage you from pursuing your goals",
      "Stay resilient in the face of challenges",
      "Keep your eyes on the prize and you'll reach it",
      "With hard work and determination, anything is possible"
    ],
    negative: [
      "It's not in the cards",
    "The timing is off",
    "It's a long shot",
    "Don't get too attached to the idea",
    "You might want to consider other options"
    ]
  }
};

/* Generates different answers, depending on coffee selection */
function shake() {
  const answerDiv = document.querySelector(".answer");
  answerDiv.innerHTML = "";
  const coffeeType = document.getElementById("coffee-type").value;
  let positiveResponses, negativeResponses;
  switch (coffeeType) {
    case "latte":
      positiveResponses = answers.latte.positive;
      negativeResponses = answers.espresso.negative;
      break;
    case "cappuccino":
      positiveResponses = answers.cappuccino.positive;
      negativeResponses = answers.cappuccino.negative;
      break;
    case "americano":
      positiveResponses = answers.americano.positive;
      negativeResponses = answers.americano.negative;
      break;
    default:
      positiveResponses = answers.espresso.positive;
      negativeResponses = answers.latte.negative;
  }
  const isSweeterCoffee = coffeeType === "latte" || coffeeType === "cappuccino";
  const responses = isSweeterCoffee ? positiveResponses : negativeResponses;
  const index = Math.floor(Math.random() * responses.length);
  const answer = responses[index];
  answerDiv.innerHTML = answer;
}

const form = document.querySelector("form");
form.addEventListener("submit", function(event) {
  event.preventDefault();
  shake();
});

/* Allows answer to fade in, as if it is real steam */
const fadeButton = document.getElementById('rollButton');
const fadeText = document.getElementById('fadeText');
let fading = false;

fadeButton.addEventListener('click', function() {
  if (!fading) {
    fading = true;
    fadeText.style.opacity = 0;
    setTimeout(function() {
      shake();
      fadeText.style.opacity = 1;
      fading = false;
    }, 1000);
  }
});