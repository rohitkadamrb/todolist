import "./App.css";
import React, { useState, useEffect } from "react";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import { FcTodoList } from "react-icons/fc";

function App() {
  const [todos, setTodos] = useState([
    // { id: "1", todo: "take dog for a walk", completed: false },
    // { id: "2", todo: "prepare dinner", completed: false },
    // { id: "3", todo: "write a post", completed: false },
  ]);
  const [filter, setfilter] = useState("all");
  const [filteredTodos, setfilteredTodos] = useState([]);
  const AddTodoHandler = (newTodo) => {
    setTodos((prevList) => prevList.concat(newTodo));
  };

  const filteredHandler = () => {
    switch (filter) {
      case "completed":
        setfilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "pending":
        setfilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setfilteredTodos(todos);
        break;
    }
  };
  useEffect(() => {
    getfromLocal();
  }, []);
  useEffect(() => {
    filteredHandler();
    savetoLocal();
    // eslint-disable-next-line
  }, [filter, todos]);

  //npm run startsaving to local storage
  const savetoLocal = () => {
    localStorage.setItem("todoList", JSON.stringify(todos));
  };
  const getfromLocal = () => {
    if (localStorage.getItem("todoList") !== null) {
      let localData = JSON.parse(localStorage.getItem("todoList"));
      setTodos(localData);
    }
  };
  return (
    <div className="App container">
      <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4  my-4">
        <div className="flex-shrink-0">
          <FcTodoList className="h-12 w-12" />
        </div>
        <div>
          <div>
            <h6 className="text-align: center text-3xl ">TODO LIST</h6>
          </div>
        </div>
      </div>
      <Form onAddTodo={AddTodoHandler} setFilter={setfilter} />
      <TodoList
        todo={todos}
        setTodos={setTodos}
        filteredTodos={filteredTodos}
      />
    </div>
  );
}

export default App;
