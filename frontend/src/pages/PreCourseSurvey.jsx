import React, { useState } from 'react';
import Question from '../components/Question';
import { createMetric } from '../../../backend/controllers/metrics.controller';
import { getStudents } from '../../../backend/controllers/student.controllers';

const PreCourseSurvey = () => {
  let dummy;
  const getStudents = async () => {
    try {
      const response = await fetch('http://localhost:5001/api/students/getStudents', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      // You can now access the response body
      const data = await response.json();
      console.log(data);
  
      if (response.ok) {
        console.log('yay', data);
        dummy= await data
        // navigate('/student-dashboard');
        return data
      } else {
        console.error(response.statusText);
      }
    } catch (error) {
      console.log("Error in trying to fetch student data");
      console.log(error);
    }
  };
  getStudents()
  const [answers, setAnswers] = useState({
    surveytype: "precourse",
    student: '',
    module: "1",
    question1: 1,
    question2: 1,
    question3: 1, 
    question4: 1,
    question5: 2,
    question6: 3,
    question7: 4,
    question8: 4,
    question9: 5,
    question10:1,
    question11: 1,
    question12: 1,
    question13: 1,
    question14: 1,
    question15: 1,
    question16: 1,
    question17: 1,
    question18: 1,
    question19: 1,
    question20: 1,
    question21: 1,
    question22: 1
  });


const fetchAndSetDummy = async () => {
  dummy = await getStudents();  // Wait for the getStudents function to finish
  console.log("Dummy after assignment:", dummy); // Now dummy will have the value
  console.log(dummy)
  setAnswers((prevAnswers) => ({
    ...prevAnswers,      // Spread the previous state
    student: dummy.data[0], // Update the student field
  }));
  
};

  const buttonStyle = {
    padding: '10px 15px',
    backgroundColor: '#67B0E8',
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
    fetchAndSetDummy()
    event.preventDefault();
    console.log('Survey submitted with answers:', answers);

    //createMetric(answers)
    //createStudent(["name"])
    testSubmit(answers)
  };


  const testSubmit = async (answers) => {
    try {
      const response = await fetch('http://localhost:5001/api/metrics/createMetric ', {
          method: 'POST',
          mode:'no-cors',
          headers: {
          'Content-Type': 'application/json',
          },
          body: JSON.stringify(answers),
      });
      const data = await response.json();
      console.log(data);

      if (response.ok) {
          console.log('yay')
          //navigate('/student-dashboard');
      }
      else {
          console.error(response.statusText);
      }
  } catch (error) {
      console.log("Error in trying to submit form data");
      console.log(error);
      };

  };
  

  return (
    <form onSubmit={handleSubmit}>
      <h2>Survey</h2>

      {/* Question 1 */}
      <h3>Before the FGI course, how comfortable were you with the following task?</h3>
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
      <h3>Rate your ability to know how to do the following before completing the FGI's course:</h3>
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
      <h3> Before completing the FGI's course, what would you do with $100 earned from a job?</h3>
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

    <h3> Before completing the FGI's course, what would you do with $100 someone gifted you?</h3>
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

export default PreCourseSurvey;
