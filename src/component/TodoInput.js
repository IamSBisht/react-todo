import React from "react";

const TodoInput = (props) => {

  // Hooks and vars
  const { inputValue, handleChange, handleSubmit } = props;

  return (
    <div className="card card-body my-3">
      <form action="" onSubmit={handleSubmit}>
        <div className="input-group">
          <div className="input-group-text bg-primary text-white">
            <span className="fas fa-book"></span>
          </div>
          <input
            type="text"
            onChange={handleChange}
            className="form-control"
            placeholder="Add a todo item"
            value={inputValue}
          />
        </div>
        <button type="submit" className="btn btn-block btn-primary w-100 mt-4">
          Add item
        </button>
      </form>
    </div>
  );
};

export default TodoInput;
