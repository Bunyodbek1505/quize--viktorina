

//  Quize 

 // Define the quiz questions as an array of objects(Viktorina savollarini ob'ektlar majmuasi sifatida belgilang)
 const questions = [
    {
      question: "What is the capital of France?",
      answers: ["Paris", "London", "Madrid", "Rome"],
      correctAnswer: "Paris"
    },
    {
      question: "What is the highest mountain in the world?",
      answers: ["Mount Everest", "Mount Kilimanjaro", "Mount McKinley", "Mount Fuji"],
      correctAnswer: "Mount Everest"
    },
    {
      question: "Who invented the telephone?",
      answers: ["Alexander Graham Bell", "Thomas Edison", "Nikola Tesla", "Guglielmo Marconi"],
      correctAnswer: "Alexander Graham Bell"
    }
  ];

  const quizForm = document.getElementById("quiz-form");
  const quizQuestions = document.getElementById("quiz-questions");
  const quizResults = document.getElementById("quiz-results");

  // Display each question in the quiz form(Har bir savolni viktorina shaklida ko'rsating)
  questions.forEach((question, index) => {
    const questionElement = document.createElement("li");
    questionElement.innerHTML = `
      <strong>${index + 1}. ${question.question}</strong><br>
      ${question.answers.map(answer => `
        <label>
          <input type="radio" name="answer-${index}" value="${answer}">
          ${answer}
        </label>
      `).join("<br>")}
    `;
    quizQuestions.appendChild(questionElement);
  });

  // Handle the quiz form submission(Viktorina shaklini topshirish bilan shug'ullaning)
  quizForm.addEventListener("submit", event => {
    event.preventDefault();

    // Collect the user's answers(Foydalanuvchining javoblarini to'plang)
    const userAnswers = [];
    questions.forEach((question, index) => {
      const answerElement = document.querySelector(`input[name="answer-${index}"]:checked`);
      if (answerElement) {
        userAnswers.push(answerElement.value);
      } else {
        userAnswers.push(null);
      }
    });

    // Grade the quiz and display the results(Viktorinaga baho bering va natijalarni ko'rsating)
    const numCorrect = questions.reduce((total, question, index) => {
      return total + (userAnswers[index] === question.correctAnswer ? 1 : 0);
    }, 0);
    const percentCorrect = Math.round(numCorrect / questions.length * 100);
    quizResults.innerHTML = `
      <p>Siz ${numCorrect} ta savoldan ${questions.length} tasiniga to'g'ri javob berdingiz.</p>
      <p>Bu ${percentCorrect}%!</p>
    `;
  });