import React, { useState } from "react";
import "./App.css";

const App = () => {
  // let message = "Hello world!";
  const [tasks, setTasks] = useState([
    {
      id: "1",
      title: "Estudar Programacao",
      completed: false,
    },
    {
      id: "2",
      title: "Ler Livros",
      completed: true,
    },
  ]);

  return (
    <>
      <div className="container">{tasks}</div>;
      <button onClick={() => setTasks("hellooooo world 2")}>
        mudar mensagem
      </button>
    </>
  );
};

export default App;
