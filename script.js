const answers = [
    "Drink more coffee",
    "Try a new coffee blend",
    "Take a coffee break",
    "Wake up and smell the coffee",
    "Ask again later",
    "Coffee is not the answer"
  ];
  
  function shake() {
    const answerDiv = document.querySelector(".answer");
    answerDiv.innerHTML = "";
    const index = Math.floor(Math.random() * answers.length);
    const answer = answers[index];
    answerDiv.innerHTML = answer;
  }
  