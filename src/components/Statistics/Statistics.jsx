import React from "react";
import StatInfoBlock from "./StatInfoBlock/StatInfoBlock.jsx";
import Button from "../TodoList/Button/Button.jsx";
import { NavLink } from "react-router-dom";

function Statistics() {
  return (
    <div className="reportContainer">
      <h1 className="reportInfo">TODO Statistics</h1>
      <StatInfoBlock name="Total Todo in-process:" result="5" />
      <StatInfoBlock name="Total Todo postponed:" result="2" />
      <StatInfoBlock name="Total Todo done:" result="2" />
      <StatInfoBlock name="Total Todo deleted:" result="8" />
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
