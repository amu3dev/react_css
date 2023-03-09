import React from "react";

import CourseGoalItem from "../CourseGoalItem/CourseGoalItem";
import "./CourseGoalList.css";

const CourseGoalList = ({ onDeleteItem, items }) => {
  return (
    <ul className="goal-list">
      {items.map((goal) => (
        <CourseGoalItem key={goal.id} id={goal.id} onDelete={onDeleteItem}>
          {goal.text}
        </CourseGoalItem>
      ))}
    </ul>
  );
};

export default CourseGoalList;
