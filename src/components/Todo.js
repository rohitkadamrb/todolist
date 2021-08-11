import React from "react";
import { MdDone, MdDelete } from "react-icons/md";

const Todo = ({ todo, status, onDelete, onComplete, id }) => {
  const onDelClickHandler = () => {
    onDelete(id);
  };
  const onDoneClickHandler = () => {
    onComplete(id);
  };
  return (
    <div className=" flex max-w-6xl max-w-6xl mx-auto border-2 bg-white rounded-xl shadow-md  ">
      <div className="w-96	 p-4  flex  align-items: center w-3/4   ">
        <li
          style={
            status
              ? {
                  textDecorationLine: "line-through",
                  textDecorationStyle: "solid",
                }
              : {}
          }
        >
          {todo}
        </li>
      </div>
      <div className=" flex-none p-3  ">
        <button
          className="flex-none text-align: right; text-3xl	 "
          onClick={onDoneClickHandler}
        >
          <MdDone />
        </button>
        <button
          className="flex-none text-align: right; text-4xl"
          onClick={onDelClickHandler}
        >
          <MdDelete />
        </button>
      </div>
    </div>
  );
};

export default Todo;
