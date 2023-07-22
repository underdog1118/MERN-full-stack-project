import React , { useState } from "react";
import "./NewGoal.css";

const NewGoal = (props) => {
  const [enteredTxt, setEnteredText] = useState('');
  const addGoalHandler = (event) => {
    event.preventDefault();
    const newGoal = {
      id: Math.random().toString(),
      text: enteredTxt,
    };
    // enteredTxt = "";
    setEnteredText('');

    props.onAddGoal(newGoal);
    // console.log(newGoal);
  };

  const textChangeHandler = (event) => {
    // enteredTxt = event.target.value;
    setEnteredText(event.target.value); 
  };

  return (
    <form className="new-goal" onSubmit={addGoalHandler}>
      <input type="text" value={enteredTxt} onChange={textChangeHandler} />
      <button type="submit">Add Goal</button>
    </form>
  );
};
export default NewGoal;
