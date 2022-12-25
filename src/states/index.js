import { applyMiddleware, legacy_createStore as createStore } from "redux";
import { todoDeletionCheck } from "./middlewares";
import rootReducer from "./rootReducer";

const store = createStore(rootReducer, applyMiddleware(todoDeletionCheck));

export { store };
