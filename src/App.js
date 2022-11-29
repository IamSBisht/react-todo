import "./App.css";
import TodoInput from "./component/TodoInput";
import TodoList from "./component/TodoList";

import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

let items = [];

function App() {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      id: uuidv4(),
      task: inputValue,
    };
    items = [...items, newItem];
    // setInputValue("");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-10 mx-auto col-md-8 mt-4">
          <h3 className="text-capitalize text-center">todo input</h3>
          <TodoInput
            handeleChange={(e) => setInputValue(e.target.value)}
            handleSubmit={handleSubmit}
          />
          <TodoList items={items} />
        </div>
      </div>
    </div>
  );
}

export default App;
