import React, { useState } from 'react';
import Question from '../components/Question';

const PostCourseSurvey = () => {
  const [answers, setAnswers] = useState({
    question1: 0,
    question2: 0,
    question3: 0, 
    question4: 0,
    question5: 0,
    question6: 0,
    question7: 0,
    question8: 0,
    question9: 0,
    question10: 0,
    question11: 0,
    question12: 0,
    question13: 0,
    question14: 0,
    question15: 0,
    question16: 0,
    question17: 0,
    question18: 0,
    question19: 0,
    question20: 0,
    question21: 0,
    question22: 0
  });

  const buttonStyle = {
    padding: '10px 15px',
    backgroundColor: '#28a745',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  };

  // Handle answer selection
  const handleAnswerChange = (questionId, selectedAnswer) => {
    setAnswers({
      ...answers,
      [questionId]: selectedAnswer
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Survey submitted with answers:', answers);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Survey</h2>

      {/* Question 1 */}
      <h3>After the FGI course, how comfortable were you with the following task?</h3>
      <Question
        questionTitle="How to open a bank account"
        options={["1", "2", "3", "4", "5"]}
        onAnswerSelected={(answer) => handleAnswerChange('question1', answer)}
      />

      {/* Question 2 */}
      <Question
        questionTitle="How to ensure a good credit score"
        options={["1", "2", "3", "4", "5"]}
        onAnswerSelected={(answer) => handleAnswerChange('question2', answer)}
      />

      {/* Question 3 */}
      <Question
        questionTitle="How to evaluate the risk and return on investments"
        options={["1", "2", "3", "4", "5"]}
        onAnswerSelected={(answer) => handleAnswerChange('question3', answer)}
      />

    {/* Question 4 */}
      <Question
        questionTitle="How much money should be invested"
        options={["1", "2", "3", "4", "5"]}
        onAnswerSelected={(answer) => handleAnswerChange('question4', answer)}
      />

    {/* Question 5 */}
    <Question
        questionTitle="How to find credible information for researching investments"
        options={["1", "2", "3", "4", "5"]}
        onAnswerSelected={(answer) => handleAnswerChange('question5', answer)}
      />

    {/* Question 6 */}
    <Question
        questionTitle="How to invest in the stock market"
        options={["1", "2", "3", "4", "5"]}
        onAnswerSelected={(answer) => handleAnswerChange('question6', answer)}
      />

    {/* Question 7 */}
      <Question
        questionTitle="How to distinguish investment between a stock and bond"
        options={["1", "2", "3", "4", "5"]}
        onAnswerSelected={(answer) => handleAnswerChange('question7', answer)}
      />

      {/* Question 8 */}
      <Question
        questionTitle="How to understand the difference between spending on a product and investing in that company"
        options={["1", "2", "3", "4", "5"]}
        onAnswerSelected={(answer) => handleAnswerChange('question8', answer)}
      />

      {/* Question 9 */}
      <Question
        questionTitle="How and why the stock market goes up and down in value"
        options={["1", "2", "3", "4", "5"]}
        onAnswerSelected={(answer) => handleAnswerChange('question9', answer)}
      />

      {/* Question 10 */}
      <Question
        questionTitle="How to know the appropriate age to invest in the stock market"
        options={["1", "2", "3", "4", "5"]}
        onAnswerSelected={(answer) => handleAnswerChange('question10', answer)}
      />

      {/* Question 11 */}
      <h3>Rate your ability to know how to do the following after completing the FGI's course:</h3>
      <Question
        questionTitle="How to invest in the stock market"
        options={["1", "2", "3", "4", "5"]}
        onAnswerSelected={(answer) => handleAnswerChange('question11', answer)}
      />
    
    {/* Question 12 */}
    <Question
        questionTitle="How to research strategies for short-term and long-term investing"
        options={["1", "2", "3", "4", "5"]}
        onAnswerSelected={(answer) => handleAnswerChange('question12', answer)}
      />

    {/* Question 13 */}
    <Question
        questionTitle="How to plan the appropriate amounts of money for spending, saving, and investing"
        options={["1", "2", "3", "4", "5"]}
        onAnswerSelected={(answer) => handleAnswerChange('question13', answer)}
      />

      {/* Question 14 */}
    <Question
        questionTitle="How to handle investment when they either increase or decrease in value"
        options={["1", "2", "3", "4", "5"]}
        onAnswerSelected={(answer) => handleAnswerChange('question14', answer)}
      />

      {/* Question 15 */}
      <h3> After completing the FGI's course, what would you do with $100 earned from a job?</h3>
    <Question
        questionTitle="Spend the $100 within the first month of receiving it"
        options={["1", "2", "3", "4", "5"]}
        onAnswerSelected={(answer) => handleAnswerChange('question15', answer)}
      />

            {/* Question 16 */}
    <Question
        questionTitle="Spend $50 within the first week of receiving it and save the other $50 in a bank account"
        options={["1", "2", "3", "4", "5"]}
        onAnswerSelected={(answer) => handleAnswerChange('question16', answer)}
      />

            {/* Question 17 */}
    <Question
        questionTitle="Save the $100 in a bank account"
        options={["1", "2", "3", "4", "5"]}
        onAnswerSelected={(answer) => handleAnswerChange('question17', answer)}
      />

    {/* Question 18 */}
    <Question
        questionTitle="Invest $100 in a portfolio that includes stocks and mutual funds"
        options={["1", "2", "3", "4", "5"]}
        onAnswerSelected={(answer) => handleAnswerChange('question18', answer)}
      />

    <h3> After completing the FGI's course, what would you do with $100 someone gifted you?</h3>
    {/* Question 19 */}
    <Question
        questionTitle="Spend the $100 within the first month of receiving it"
        options={["1", "2", "3", "4", "5"]}
        onAnswerSelected={(answer) => handleAnswerChange('question19', answer)}
      />

    {/* Question 20 */}
    <Question
        questionTitle="Spend $50 within the first week of receiving it and save the other $50 in a bank account"
        options={["1", "2", "3", "4", "5"]}
        onAnswerSelected={(answer) => handleAnswerChange('question20', answer)}
      />

    {/* Question 21 */}
    <Question
        questionTitle="Save the $100 in a bank account"
        options={["1", "2", "3", "4", "5"]}
        onAnswerSelected={(answer) => handleAnswerChange('question21', answer)}
      />

    {/* Question 22 */}
    <Question
        questionTitle="Invest $100 in a portfolio that includes stocks and mutual funds"
        options={["1", "2", "3", "4", "5"]}
        onAnswerSelected={(answer) => handleAnswerChange('question22', answer)}
      />

      <button style={buttonStyle} type="submit"> Submit </button>
    </form>
  );
};

export default PostCourseSurvey;
