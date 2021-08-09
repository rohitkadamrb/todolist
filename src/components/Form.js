import React, { useState } from "react";

const Form = (props) => {
  const [enteredText, setEnteredText] = useState("");
  const addTodoHandler = (event) => {
    event.preventDefault();
    const newTodo = {
      id: Math.random().toString(),
      todo: enteredText,
      completed: false,
    };
    setEnteredText("");
    props.onAddTodo(newTodo);
  };
  const TextHandler = (event) => {
    setEnteredText(event.target.value);
  };
  const onFilterHandler = (e) => {
    props.setFilter(e.target.value);
  };
  return (
    <div>
      <form
        className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4  my-4   "
        onSubmit={addTodoHandler}
      >
        <input value={enteredText} type="text" onChange={TextHandler} />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded md:w-1/3"
          type="submit"
        >
          Add
        </button>
      </form>
      <select
        className="p-6   mx-auto   rounded-xl shadow-md flex items-center space-x-4  my-4  md:w-1/4 "
        onChange={onFilterHandler}
        name="todos"
        id="filter-tasks"
      >
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="pending">Pending</option>
      </select>
    </div>
  );
};
export default Form;
