import React from "react";

import Button from "../Button/Button.jsx";

const Item = () => {
  return (
    <div className="item">
      <h3>Task name</h3>
      <div className="info-block">
        <p className="status-panel">Task in progress</p>
        <p className="created-date-panel">Created: Date - Time</p>
      </div>
      <div className="control-block">
        <Button class="view-button" name="View" />
        <Button class="postpone-button" name="Postpone" />
        <Button class="done-button" name="Done" />
        <Button class="delete-button" name="Delete" />
      </div>
    </div>
  );
};

export default Item;
