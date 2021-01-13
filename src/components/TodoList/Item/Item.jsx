import React from "react";

import Button from "../Button/Button.jsx";

const FormatDateForPanel = (props) => {
  const datePart = new Date(props.date).toLocaleString("ru", {
    day: "2-digit",
    month: "2-digit",
    year: "2-digit",
  });
  const timePart = new Date(props.date).toLocaleString("ru", {
    hour: "2-digit",
    minute: "2-digit",
  });
  return (
    <p>
      {props.prefix}: {datePart} - {timePart}
    </p>
  );
};

const Item = (props) => {
  return (
    <div className="item">
      <h3>{props.text}</h3>
      <div className="info-block">
        <p className="status-panel">{props.state}</p>
        <p className="created-date-panel">
          {" "}
          <FormatDateForPanel prefix="Created" date={props.dateCreated} />{" "}
        </p>
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
