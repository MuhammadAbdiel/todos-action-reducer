import mockAPI from "../../data/mockAPI";

const ActionType = {
  ADD_GOAL: "ADD_GOAL",
  DELETE_GOAL: "DELETE_GOAL",
  RECIEVE_GOALS: "RECIEVE_GOALS",
};

function addGoalActionCreator({ id, text }) {
  return {
    type: ActionType.ADD_GOAL,
    payload: {
      id,
      text,
    },
  };
}

function deleteGoalActionCreator(id) {
  return {
    type: ActionType.DELETE_GOAL,
    payload: {
      id,
    },
  };
}

function recieveGoalsActionCreator(goals) {
  return {
    type: ActionType.RECIEVE_GOALS,
    payload: {
      goals,
    },
  };
}

function asyncAddGoal(text) {
  return async (dispatch) => {
    const { id } = await mockAPI.addGoal(text);
    dispatch(addGoalActionCreator({ id, text }));
  };
}

function asyncDeleteGoal(id) {
  return async (dispatch) => {
    await mockAPI.deleteGoal(id);
    dispatch(deleteGoalActionCreator(id));
  };
}

function asyncRecieveGoals() {
  return async (dispatch) => {
    const goals = await mockAPI.getGoals();
    dispatch(recieveGoalsActionCreator(goals));
  };
}

export {
  ActionType,
  asyncAddGoal,
  asyncDeleteGoal,
  asyncRecieveGoals,
  addGoalActionCreator,
  deleteGoalActionCreator,
  recieveGoalsActionCreator,
};
