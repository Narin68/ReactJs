import './App.css';
import { useState } from 'react';
function App() {

  let [todoList, setTodoList] = useState([]);
  let [task, setTask] = useState("");

  const deleteTask = (id) => {
    let newTask = todoList.filter((v) => v.id != id);
    setTodoList(newTask);
  }

  const addTask = () => {
    let task = { name: newTask, id: todoList.length == 0 ? 1 : todoList[todoList.length - 1].id + 1 };
    
    setTodoList([...todoList,task]);
  }

  const complete = (id) => {

  }




  return (
    <div className="App">
      
    </div>
  );
}

export default App;
