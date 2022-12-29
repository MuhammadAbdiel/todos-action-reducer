import { ActionType } from "./action";

function todosReducer(todos = [], action) {
  // First way
  // switch (action.type) {
  //   case "ADD_TODO":
  //     return todos.concat(action.payload);
  //   default:
  //     return todos;
  // }

  // Second way
  switch (action.type) {
    case ActionType.ADD_TODO:
      return [...todos, action.payload];
    case ActionType.DELETE_TODO:
      return todos.filter((todo) => todo.id !== action.payload.id);
    case ActionType.TOGGLE_TODO:
      return todos.map((todo) => {
        if (todo.id !== action.payload.id) {
          return todo;
        }

        return {
          ...todo,
          complete: !todo.complete,
        };
      });
    case ActionType.RECIEVE_TODOS:
      return action.payload.todos;
    default:
      return todos;
  }

  // Third way
  // if (action.type === "ADD_TODO") {
  //   return [...todos, action.payload];
  // }
  // return todos;
}

export { todosReducer };
