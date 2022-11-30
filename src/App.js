import "./App.css";
import TodoInput from "./component/TodoInput";
import TodoList from "./component/TodoList";

import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [taskList, setTaskList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      id: uuidv4(),
      task: inputValue,
    };
    setTaskList([...taskList, newItem]);
    localStorage.setItem("tasklist", JSON.stringify([...taskList, newItem]))
    setInputValue("");
  };

  useEffect(() => {
    let tasklist_ = localStorage.getItem("tasklist")
    if (tasklist_) {
      tasklist_ = JSON.parse(tasklist_ ?? "{}")
      setTaskList(tasklist_)
    }
  }, [])

  return (
    <div className="container">
      <div className="row">
        <div className="col-10 mx-auto col-md-8 mt-4">
          <h3 className="text-capitalize text-center">todo input</h3>
          <TodoInput
            inputValue={inputValue}
            handleChange={(e) => setInputValue(e.target.value)}
            handleSubmit={handleSubmit}
          />
          <TodoList items={taskList} />
        </div>
      </div>
    </div>
  );
}

export default App;
