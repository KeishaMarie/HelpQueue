import React from "react";

function Question(props){
  return (
    <React.Fragment>
      <h3>Question {props.questionNumber}</h3>
      <p>{props.questionText}</p>
    </React.Fragment>
  );
}

export default Question;