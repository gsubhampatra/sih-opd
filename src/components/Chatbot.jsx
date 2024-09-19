import React, { useState } from 'react';

function Chatbot({ onComplete }) {
  const questions = [
    "Do you have a fever?",
    "Do you have a cough?",
    "Are you experiencing body pain?",
    "Have you been in contact with a COVID patient?"
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);

  const handleAnswer = (answer) => {
    setAnswers([...answers, answer]);
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      onComplete(answers);
    }
  };

  return (
    <div className="max-w-lg p-4 mx-auto bg-gray-100 rounded-md shadow-md">
      <h2 className="mb-4 text-xl font-bold">Health Check</h2>
      <p className="mb-4">{questions[currentQuestion]}</p>
      <div>
        <button onClick={() => handleAnswer('Yes')} className="px-4 py-2 mr-2 text-white bg-green-500 rounded-md">Yes</button>
        <button onClick={() => handleAnswer('No')} className="px-4 py-2 text-white bg-red-500 rounded-md">No</button>
      </div>
    </div>
  );
}

export default Chatbot;
