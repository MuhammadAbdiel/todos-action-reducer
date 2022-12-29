import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  asyncAddGoal,
  asyncDeleteGoal,
  asyncRecieveGoals,
} from "../states/goals/action";
import GoalInput from "./GoalInput";
import GoalItem from "./GoalItem";

function GoalsList() {
  // TODO: Get goals from store;
  const goals = useSelector((states) => states.goals);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncRecieveGoals());
  }, [dispatch]);

  function onAddGoal(text) {
    // TODO: dispatch action ADD_GOAL
    dispatch(asyncAddGoal(text));
  }

  function onDeleteGoal(id) {
    // TODO: dispatch action DELETE_GOAL
    dispatch(asyncDeleteGoal(id));
  }

  return (
    <div>
      <h3>My Goals</h3>
      <GoalInput addGoal={onAddGoal} />

      <ul>
        {goals.map((goal) => (
          <li key={goal.id}>
            <GoalItem {...goal} deleteGoal={onDeleteGoal} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GoalsList;
