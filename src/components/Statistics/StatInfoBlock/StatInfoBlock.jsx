import React from "react";

const StatInfoBlock = (props) => {
  return (
    <div>
      <span className="infoSpan">{props.name}</span>
      <span className="resultSpan">{props.result}</span>
    </div>
  );
};

export default StatInfoBlock;
