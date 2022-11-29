import React from "react";
import TodoItem from "./TodoItem";

const TodoList = (props) => {
  const { id, item } = props;
  return (
    <ul className="list-group my-5">
      <h3 className="text-center">Todo List</h3>
      <TodoItem />
      <button className="btn btn-danger w-100">Clear List</button>
    </ul>
  );
};

export default TodoList;
