import React from "react";
import Todo from "./Todo";
const TodoList = ({ todo, setTodos, filteredTodos }) => {
  const onDeleteHandler = (todoId) => {
    setTodos(todo.filter((t) => t.id !== todoId));
  };

  const onCompleteHandler = (todoId) => {
    setTodos(
      todo.map((item) => {
        if (item.id === todoId) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };
  return (
    <div>
      {filteredTodos.length > 0 && (
        <div className="p-8 max-w-6xl mx-auto bg-white   shadow-md   items-center   ">
          <ul>
            {filteredTodos.map((data) => {
              return (
                <Todo
                  todo={data.todo}
                  status={data.completed}
                  onDelete={onDeleteHandler}
                  onComplete={onCompleteHandler}
                  id={data.id}
                  key={data.id}
                />
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default TodoList;
