import React, { useState } from "react";
import Progress from "./Progress";
import Question from "./Question";
import Answers from "./Answers";
import Answer from "./Answer";
import questions from "./api/QuizQuestions";

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [currentAnswer, setCurrentAnswer] = useState("");
  const [answers, setAnswers] = useState([]);

  const [error, setError] = useState("");
  const [showResult, setShowResult] = useState(false);

  const handleSelected = e => {
    setError("");
    setCurrentAnswer(e.target.value);
    console.log(e.target.value);
    console.log(currentAnswer === "a");
    console.log(e.target);
  };

  const question = questions[currentQuestion];
  const next = () => {
    const answer = { questionId: question.id, chosenAnswer: currentAnswer };
    if (!currentAnswer) {
      setError("Please choose an answer to move on");
      return;
    }
    answers.push(answer);
    setAnswers(answers);
    setCurrentAnswer("");
    console.log(answers);

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
      return;
    }
    setShowResult(true);
  };

  const restart = () => {
    setShowResult(false);
    setCurrentQuestion(0);
    setAnswers([])
  };

  const checkResult = (answer, question) => {
    if (answer.chosenAnswer === question.correct_answer){
      return <div className="correct"> correct </div>
    }
    console.log('answerss', answer.chosenAnswer, question.correct_answer)
    return <div className="failed"> failed </div>
  }

  const renderResultsData = () => {
    return answers.map( answer => {
     const question = questions.find( question => question.id === answer.questionId );
     return <li key={question.id}> {question.question} - {checkResult(answer, question)} </li>
    });
  };

  if (showResult) {
    return (
      <div>
        Result Data
        <ul>
          {renderResultsData()}
        </ul>
        <button onClick={restart}> restart </button>
      </div>
    );
  }

  return (
    <div>
      <Progress current={currentQuestion + 1} total={questions.length} />
      <Question question={question.question} />
      <div className="error"> {error} </div>
      <Answers
        answer={question}
        currentAnswer={currentAnswer}
        handleSelected={handleSelected}
      />{" "}
      {<br />}
      <button onClick={next}> Confirm and continue </button>
    </div>
  );
}

// https://www.youtube.com/watch?v=_PuUdTAhrK0
