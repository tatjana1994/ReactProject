import React from "react";

const Display = (props) => {
  if (!props.value) {
    return null;
  } else {
    return (
      <div>
        <div className="output">{props.value}</div>
      </div>
    );
  }
};

export default Display;
