function createStore() {
  /**
   * Store memiliki 4 hal
   * 1. State (done)
   * 2. Mendapatkan state (done)
   * 3. Men-subscribe perubahan state (done)
   * 4. Memperbarui state
   */

  let state;
  let listeners = [];

  const getState = () => state;

  const subscribe = (listener) => {
    listeners.push(listener);

    return () => {
      listeners = listeners.filter((l) => l !== listener);
    };
  };

  //  the store
  return {
    getState,
    subscribe,
  };
}

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

function todosReducer(todos = [], action) {
  // First way
  // switch (action.type) {
  //   case "ADD_TODO":
  //     return todos.concat(action.payload);
  //   default:
  //     return todos;
  // }

  // Second way
  // switch (action.type) {
  //   case "ADD_TODO":
  //     return [...todos, action.payload];
  //   default:
  //     return todos;
  // }

  // Third way
  if (action.type === "ADD_TODO") {
    return [...todos, action.payload];
  }

  return todos;
}

// consume
const store = createStore();

// subscribe state changed
const unsubscribe = store.subscribe(() => {
  console.log("State changed");
});

// unsubscribe
unsubscribe();

// getting the state
store.getState();
