import React , { useState } from "react";
import "./NewGoal.css";

const NewGoal = (props) => {
    //使用 useState 钩子声明了一个名为 enteredTxt 的状态变量，并使用
    //setEnteredText 函数来更新该状态变量。useState('') 表示初始状态为空字符串。
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

//通过 export default NewGoal; 将 NewGoal 组件导出，使得其他文件可以导入并使用这个组件。
//这个组件的主要功能是提供一个表单，让用户输入新的目标，并通过回调函数将新目标传递给父组件进行处理。
export default NewGoal;
