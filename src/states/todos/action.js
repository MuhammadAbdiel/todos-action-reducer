import mockAPI from "../../data/mockAPI";

const ActionType = {
  ADD_TODO: "ADD_TODO",
  DELETE_TODO: "DELETE_TODO",
  TOGGLE_TODO: "TOGGLE_TODO",
  RECIEVE_TODOS: "RECIEVE_TODOS",
};

function addTodoActionCreator({ id, text }) {
  return {
    type: ActionType.ADD_TODO,
    payload: {
      id,
      text,
      complete: false,
    },
  };
}

function deleteTodoActionCreator(id) {
  return {
    type: ActionType.DELETE_TODO,
    payload: {
      id,
    },
  };
}

function toggleTodoActionCreator(id) {
  return {
    type: ActionType.TOGGLE_TODO,
    payload: {
      id,
    },
  };
}

function recieveTodosActionCreator(todos) {
  return {
    type: ActionType.RECIEVE_TODOS,
    payload: {
      todos,
    },
  };
}

function asyncAddTodo(text) {
  return async (dispatch) => {
    const { id } = await mockAPI.addTodo(text);
    dispatch(addTodoActionCreator({ id, text }));
  };
}

function asyncDeleteTodo(id) {
  return async (dispatch) => {
    await mockAPI.deleteTodo(id);
    dispatch(deleteTodoActionCreator(id));
  };
}

function asyncToggleTodo(id) {
  return async (dispatch) => {
    dispatch(toggleTodoActionCreator(id));

    try {
      await mockAPI.toggleTodo(id);
    } catch (error) {
      alert(error.message);

      // rollback state change with re-toggling the to-do item.
      dispatch(toggleTodoActionCreator(id));
    }
  };
}

function asyncRecieveTodos() {
  return async (dispatch) => {
    const todos = await mockAPI.getTodos();
    dispatch(recieveTodosActionCreator(todos));
  };
}

export {
  ActionType,
  addTodoActionCreator,
  deleteTodoActionCreator,
  toggleTodoActionCreator,
  recieveTodosActionCreator,
  asyncAddTodo,
  asyncDeleteTodo,
  asyncToggleTodo,
  asyncRecieveTodos,
};
