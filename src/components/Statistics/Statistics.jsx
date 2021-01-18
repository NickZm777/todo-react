import React from "react";
import StatInfoBlock from "./StatInfoBlock/StatInfoBlock.jsx";
import Button from "../TodoList/Button/Button.jsx";
import { NavLink } from "react-router-dom";
import reduxState from "../redux/redux.jsx";

function checker(checker, key) {
  let counter = 0;
  checker.forEach((element) => {
    if (element.state === key) {
      counter++;
    }
  });
  console.log(`statistics - ${key}: ${counter}`);
  return counter;
}

function Statistics() {
  return (
    <div className="reportContainer">
      <h1 className="reportInfo">TODO Statistics</h1>
      <StatInfoBlock
        name="Total Todo in-process:"
        result={checker(reduxState, "in-process")}
      />
      <StatInfoBlock
        name="Total Todo postponed:"
        result={checker(reduxState, "postponed")}
      />
      <StatInfoBlock
        name="Total Todo done:"
        result={checker(reduxState, "done")}
      />
      <StatInfoBlock
        name="Total Todo deleted:"
        result={checker(reduxState, "deleted")}
      />
      <Button class="backButton" name="Return to list" />
      <Button
        class="clearDeleteStatisticsButton"
        name="Clear deleted-statistics"
      />
      <div>
        <NavLink to="/">Back to main Page</NavLink>
      </div>
    </div>
  );
}

export default Statistics;
