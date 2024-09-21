import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom'

const quizQuestions = [
  {
    question: "What is the capital of France?",
    options: ["Paris", "London", "Berlin", "Rome"],
    answer: "Paris"
  },
  {
    question: "Which language is primarily used in web development?",
    options: ["Python", "JavaScript", "C++", "Java"],
    answer: "JavaScript"
  },
  {
    question: "What year was React first released?",
    options: ["2010", "2013", "2015", "2017"],
    answer: "2013"
  }
];

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0); // Current question index
  const [score, setScore] = useState(0);                     // Total score
  const [showScore, setShowScore] = useState(false);         // To display score after quiz

  const [selectedOption, setSelectedOption] = useState('');  // Track selected option
  const navigate = useNavigate();

  // Handles option selection
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  // Handles answer submission
  const handleSubmit = (event) => {
    event.preventDefault();

    // Check if selected option is correct
    if (selectedOption === quizQuestions[currentQuestion].answer) {
      setScore(score + 1);
    }

    // Move to the next question or show the score
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < quizQuestions.length) {
      setCurrentQuestion(nextQuestion);
      setSelectedOption(''); // Clear selected option
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="quiz-container">
      {showScore ? (
        <div className="score-section">
          <h2>Your Score: {score} / {quizQuestions.length}</h2>
          <button onClick={() => navigate('../tutor-dashboard')}> Back to Modules</button>
        </div>
      ) : (
        <div className="question-section">
          <h2>{quizQuestions[currentQuestion].question}</h2>
          <form onSubmit={handleSubmit}>
            {quizQuestions[currentQuestion].options.map((option, index) => (
              <div key={index}>
                <label>
                  <input
                    type="radio"
                    value={option}
                    checked={selectedOption === option}
                    onChange={handleOptionChange}
                  />
                  {option}
                </label>
              </div>
            ))}
            <button type="submit">Submit</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Quiz;
