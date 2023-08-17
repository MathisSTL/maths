const correctAnswers = {
  q1: "c",
  q2: "d",
  q3: "c",
  q4: "b",
  q5: "b",
  q6: "a",
  q7: "a",
  q8: "a"
};

const submitButton = document.getElementById("submit-btn");
const resultMessage = document.getElementById("result");
const chiffreElement = document.getElementById("chiffre");

submitButton.addEventListener("click", () => {
  const form = document.getElementById("quiz-form");
  const formData = new FormData(form);
  let correctCount = 0;

  for (const [question, answer] of formData) {
    if (correctAnswers[question] === answer) {
      correctCount++;
    }
  }

  if (correctCount === Object.keys(correctAnswers).length) {
    resultMessage.style.display = "block";
    chiffreElement.textContent = "0";
  }
});