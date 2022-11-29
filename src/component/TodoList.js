import React from "react";
import TodoItem from "./TodoItem";

const TodoList = (props) => {
  const { items } = props;
  return (
    <ul className="list-group my-5">
      <h3 className="text-center">Todo List</h3>
      {items.map((item) => {
        return <TodoItem key={item.id} title={item.task} />;
      })}
      <button className="btn btn-danger w-100">Clear List</button>
    </ul>
  );
};

export default TodoList;
