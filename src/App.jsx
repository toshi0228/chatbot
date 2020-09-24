import React, { useEffect, useState } from "react";
import dafaultDataset from "./dataset";
import "./assets/styles/style.css";
import { AnswersList, Chats } from "./components";

const App = () => {
  const [answers, setAnswes] = useState([]);
  const [chats, setChats] = useState([]);
  const [currentId, setCurrentId] = useState("init");
  const [dataset, setDataset] = useState(dafaultDataset);
  const [open, setOpen] = useState(false);

  const initDataset = dataset[currentId];
  const initAnswer = initDataset.answers;

  useEffect(() => {
    selectAnswer(initAnswer, currentId);
  }, []);

  // 次の情報を呼び出す関数
  const displayNextQuestion = (nextQuestionId) => {
    const _chats = chats;

    _chats.push({
      text: dataset[nextQuestionId].question,
      type: "question",
    });
    setChats(_chats);
    setCurrentId(currentId);

    setAnswes(dataset[nextQuestionId].answers);
  };

  const selectAnswer = (selectAnswer, nextQuestionId) => {
    switch (true) {
      case nextQuestionId === "init":
        displayNextQuestion(nextQuestionId);
        break;

      case /^https:*/.test(nextQuestionId):
        const a = document.createElement("a");
        a.href = nextQuestionId;
        a.target = "blank";
        a.click();
        break;

      default:
        const chat = {
          text: selectAnswer,
          type: "ansewer",
        };

        const _chats = chats;
        _chats.push(chat);

        setChats(_chats);
        setTimeout(() => displayNextQuestion(nextQuestionId), 1000);
        break;
    }
  };

  return (
    <section className="c-section">
      <div className="c-box">
        <Chats chats={chats} />
        <AnswersList answers={answers} select={selectAnswer} />
      </div>
    </section>
  );
};

export default App;
