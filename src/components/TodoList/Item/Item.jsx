import React from "react";

const Item = () => {
  return (
    <div className="item">
      <h3>Task name</h3>
      <div className="info-block">
        <p className="status-panel">Task in progress</p>
        <p className="created-date-panel">Created: Date - Time</p>
      </div>
      <div className="control-block">
        <button className="view-button">View</button>
        <button className="postpone-button">Postpone</button>
        <button className="done-button">Done</button>
        <button className="delete-button">Delete</button>
      </div>
    </div>
  );
};

export default Item;
