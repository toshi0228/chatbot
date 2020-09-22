import React, { useEffect, useState } from "react";
import dafaultDataset from "./dataset";
import "./assets/styles/style.css";
import { AnswersList } from "./components";

const App = () => {
  const [answers, setAnswes] = useState([]);
  const [chats, setChats] = useState([]);
  const [currentId, setCurrentId] = useState("init");
  const [dataset, setDataset] = useState(dafaultDataset);
  const [open, setOpen] = useState(false);
  // const [state, setState] = useState(initialState);

  // const initAnswer = () => {
  //   const initAnswer = dataset[currentId];
  //   const initAnswer = in
  // };
  useEffect(() => {
    const initDataset = dataset[currentId];
    const initAnswer = initDataset.answers;
    setAnswes(initAnswer);
    console.log(answers);
  }, []);

  return (
    <section className="c-section">
      <div className="c-box">
        <AnswersList answers={answers} />
      </div>
    </section>
  );
};

export default App;
