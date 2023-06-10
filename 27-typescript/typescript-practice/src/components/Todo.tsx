import React from "react";
import TodoItem from "./TodoItem";
import { TodosContext } from "../store/todo-context";
import { useContext } from "react";
const Todos: React.FC = () => {
  const todoCtx = useContext(TodosContext);
  const deleteHandler = (id: string) => {
    todoCtx.deleteTodo(id);
  };
  return (
    <ul>
      {todoCtx.items.map((item) => (
        <>
          <TodoItem key={item.id} text={item.text} />
          <button
            onClick={() => {
              deleteHandler(item.id);
            }}
          >
            delete
          </button>
        </>
      ))}
    </ul>
  );
};

export default Todos;
