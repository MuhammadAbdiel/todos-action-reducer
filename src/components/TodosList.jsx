import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addTodoActionCreator,
  deleteTodoActionCreator,
  toggleTodoActionCreator,
} from "../states/todos/action";
import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";

function TodoList() {
  // TODO: Get todos from store;
  const todos = useSelector((states) => states.todos);
  const dispatch = useDispatch();

  function onAddTodo(text) {
    // TODO: dispatch action ADD_TODO
    const id = `todo-${+new Date()}`;
    dispatch(addTodoActionCreator({ id, text }));
  }

  function onToggleTodo(id) {
    // TODO: dispatch action TOGGLE_TODO
    dispatch(toggleTodoActionCreator(id));
  }

  function onDeleteTodo(id) {
    // TODO: dispatch action DELETE_TODO
    dispatch(deleteTodoActionCreator(id));
  }

  return (
    <div>
      <h3>My Todos</h3>
      <TodoInput addTodo={onAddTodo} />

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <TodoItem
              {...todo}
              toggleTodo={onToggleTodo}
              deleteTodo={onDeleteTodo}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
