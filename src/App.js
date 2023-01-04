import "./App.css";
import { useState } from "react";
import { Todo } from "./Todo.js";
function App() {
  let [todoList, setTodoList] = useState([]);
  let [task, setTask] = useState("");

  const deleteTask = (id) => {
    let newTask = todoList.filter((v) => v.id != id);
    setTodoList(newTask);
  };

  const addTask = () => {
    let newTask = {
      name: task,
      id: todoList.length == 0 ? 1 : todoList[todoList.length - 1].id + 1,
    };

    setTodoList([...todoList, newTask]);
  };
  const onChange = (v) => {
    setTask(v.target.value);
  };

  const complete = (id) => {};

  return (
    <div className="App">
      <input type="text" onChange={onChange}></input>
      <button onClick={addTask}>Add task</button>
      <div>
        {todoList.map((v) => {
          return <Todo name={v.name} id={v.id} deleteTask={deleteTask} />;
        })}
      </div>
    </div>
  );
}

export default App;
