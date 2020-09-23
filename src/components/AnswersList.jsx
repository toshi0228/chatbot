import React from "react";
import "../assets/styles/style.css";
import { Answer } from "./index";

const AnswersList = ({ answers, select }) => {
  return (
    <div className="c-grid__answer">
      {answers.map((answer, index) => {
        return (
          <Answer
            key={index.toString()}
            content={answer.content}
            nextId={answer.nextId}
            select={select}
          />
        );
      })}
    </div>
  );
};

export default AnswersList;
