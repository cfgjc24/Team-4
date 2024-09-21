import React, { useState } from 'react';

const Question = ({ questionTitle, options, onAnswerSelected }) => {
  // Local state for the selected answer
  const [selectedAnswer, setSelectedAnswer] = useState('');

    // Define inline styles for the answers section
    const answersStyle = {
        marginTop: '20px',
        padding: '20px',
        backgroundColor: '#f0f0f0',
        borderRadius: '8px',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
      };
    
      const questionStyle = {
        marginBottom: '20px',
      };
    

    
      const headingStyle = {
        marginBottom: '10px',
      };

    const handleChange = (event) => {
        const { value } = event.target;
        setSelectedAnswer(value); // Update local state
        onAnswerSelected(parseInt(value));  // Notify parent about the selected answer
    };

  return (
    <div style={questionStyle}>
      <h4 style={headingStyle}>{questionTitle}</h4>
      {options.map((option, index) => (
        <label key={index} style={{ display: 'inline', marginBottom: '8px' }}>
        <input
          type="radio" 
          style={{margin: '10px'}}
          name={questionTitle}
          value={option}
          checked= {selectedAnswer === option}  // Properly bind the checked state
          onChange={handleChange}  // Update on change
        />
          {option}
        </label>
      ))}
    </div>
  );
};

export default Question;

