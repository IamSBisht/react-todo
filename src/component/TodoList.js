import React from "react";
import TodoItem from "./TodoItem";

const TodoList = (props) => {
  const { items, clearList, handleDelete, handleEdit } = props;
  return (
    <ul className="list-group my-5">
      <h3 className="text-center">Todo List</h3>
      {items.map((item) => {
        return (
          <TodoItem
            key={item.id}
            title={item.task}
            handleDelete={() => handleDelete(item.id)}
            handleEdit={() => handleEdit(item.id)}
          />
        );
      })}
      <button className="btn btn-danger w-100" onClick={clearList}>
        Clear List
      </button>
    </ul>
  );
};

export default TodoList;
