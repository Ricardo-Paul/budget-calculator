import React from "react";
import Answer from "./Answer";
import questions from "./api/QuizQuestions";

function Answers(props) {
  return (
    <>
      <Answer
        letter="a"
        answer={props.answer.answer_a}
        selected={props.currentAnswer === "a"}
        handleSelected={props.handleSelected}
      />{" "}
      {<br />}
      <Answer
        letter="b"
        answer={props.answer.answer_b}
        selected={props.currentAnswer === "b"}
        handleSelected={props.handleSelected}
      />{" "}
      {<br />}
      <Answer
        letter="c"
        answer={props.answer.answer_c}
        selected={props.currentAnswer === "c"}
        handleSelected={props.handleSelected}
      />{" "}
      {<br />}
      <Answer
        letter="d"
        answer={props.answer.answer_d}
        selected={props.currentAnswer === "d"}
        handleSelected={props.handleSelected}
      />{" "}
      {<br />}
    </>
  );
}

export default Answers;
