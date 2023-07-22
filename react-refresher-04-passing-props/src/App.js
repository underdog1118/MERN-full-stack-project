import React, { useState } from "react";

import GoalList from "./components/GoalList";
import NewGoal from "./components/NewGoal/NewGoal";
import "./App.css";

const App = () => {
  // 使用 useState 声明一个名为 courseGoals 的状态变量，初始值为一个包含三个目标对象的数组。
  // 同时，使用 setCourseGoals 函数来更新该状态变量。  
  const [courseGoals, setCourseGoals] = useState([
    { id: "cg1", text: "Finish the Course" },
    { id: "cg2", text: "Learn all about the Course Main Topic" },
    { id: "cg3", text: "Help other students in the Course Q&A" },
  ]);

  // 使用 setCourseGoals 更新 courseGoals 状态。
  // 在这里使用了 concat 方法来将新的目标对象 newGoal 添加到原有的 courseGoals 数组中。
  const addNewGoalHandler = (newGoal) => {
    // setCourseGoals(courseGoals.concat(newGoal));
    setCourseGoals((prevCourseGoals) => {
      return prevCourseGoals.concat(newGoal);
    })
  };

  /*
  这种使用 useState 的方式是 React 中函数组件的推荐写法，它使得状态管理更简洁、可读性更好，并且避免
  了类组件中的繁琐状态管理和生命周期方法。通过使用 useState，可以将组件内的状态逻辑封装到函数组件中，
  使代码更加清晰和易于维护
  */
  return (
    <div className="course-goals">
      <h2>Course Goals</h2>
      <NewGoal onAddGoal={addNewGoalHandler} />
      <GoalList goals={courseGoals} />
    </div>
  );
};

export default App;
