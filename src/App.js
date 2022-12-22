import { createStore } from "./redux";

function App() {
  // TODOS
  function addTodoActionCreator({ id, text }) {
    return {
      type: "ADD_TODO",
      payload: {
        id,
        text,
        complete: false,
      },
    };
  }

  function deleteTodoActionCreator(id) {
    return {
      type: "DELETE_TODO",
      payload: {
        id,
      },
    };
  }

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
      case "ADD_TODO":
        return [...todos, action.payload];
      case "DELETE_TODO":
        return todos.filter((todo) => todo.id !== action.payload.id);
      default:
        return todos;
    }

    // Third way
    // if (action.type === "ADD_TODO") {
    //   return [...todos, action.payload];
    // }
    // return todos;
  }

  // GOALS
  function addGoalActionCreator({ id, text }) {
    return {
      type: "ADD_GOAL",
      payload: {
        id,
        text,
      },
    };
  }

  function deleteGoalActionCreator(id) {
    return {
      type: "DELETE_GOAL",
      payload: {
        id,
      },
    };
  }

  function goalsReducer(goals = [], action = {}) {
    switch (action.type) {
      case "ADD_GOAL":
        return [...goals, action.payload];
      case "DELETE_GOAL":
        return goals.filter((goal) => goal.id !== action.payload.id);
      default:
        return goals;
    }
  }

  function rootReducer(state = {}, action = {}) {
    return {
      todos: todosReducer(state.todos, action),
      goals: goalsReducer(state.goals, action),
    };
  }

  // consume
  const store = createStore(rootReducer);

  // subscribe state changed
  store.subscribe(() => {
    console.log("State changed!", store.getState());
  });

  store.dispatch(
    addTodoActionCreator({
      id: 1,
      text: "Belajar Redux",
    })
  );

  store.dispatch(
    addTodoActionCreator({
      id: 2,
      text: "Belajar React",
    })
  );

  store.dispatch(
    addTodoActionCreator({
      id: 3,
      text: "Belajar React Native",
    })
  );

  // menghapus todo dengan id 3
  store.dispatch(deleteTodoActionCreator(3));

  store.dispatch(
    addGoalActionCreator({
      id: 1,
      text: "Get a Doctorate",
    })
  );

  store.dispatch(
    addGoalActionCreator({
      id: 2,
      text: "Be an Entrepreneur",
    })
  );

  store.dispatch(deleteGoalActionCreator(1));
}

export default App;
