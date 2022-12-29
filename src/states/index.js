import { configureStore } from "@reduxjs/toolkit";
import { thunk, todoDeletionCheck } from "./middlewares";
import { goalsReducer } from "./goals/reducer";
import { todosReducer } from "./todos/reducer";
// import { applyMiddleware, legacy_createStore as createStore } from "redux";
// import rootReducer from "./rootReducer";

// createStore redux
// const store = createStore(
//   rootReducer,
//   applyMiddleware(thunk, todoDeletionCheck)
// );

// configureStore @reduxjs/toolkit
const store = configureStore({
  reducer: {
    todos: todosReducer,
    goals: goalsReducer,
  },
  middleware: [thunk, todoDeletionCheck],
});

export { store };
