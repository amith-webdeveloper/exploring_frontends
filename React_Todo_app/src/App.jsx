import { useState } from "react";
import "./App.css";

function App() {
  const [todos, settodos] = useState([
    {
      title: "go to gym",
      description: "go to gym from 9am to 10:30",
      completed: false,
    },
    {
      title: "coding",
      description: "code from 10am to 1",
      completed: true,
    },
  ]);

  function addtodo(e){
    settodos([...todos , {
      title:"go to school",
      description:"go to school from 8am to 4am",
      completed:true
    }])

  }

  return (
    <>
 <button onClick={addtodo}>add random todo</button>
      {todos.map((todo) => {
        return (
          <div>
            <h2>{todo.title}</h2>
            <p>{todo.description}</p>
            <p>{todo.completed == true ? "yes" : "no"}</p>
          </div>
        );
      })}
    </>
  );
}

export default App;
