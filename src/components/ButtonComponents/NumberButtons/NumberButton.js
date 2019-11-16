import React from "react";
import Numbers from "./Numbers";

const NumberButton = (props) => {
  return (
    <button>
    <div>{props.number}</div>

      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </button>
  );
};

export default NumberButton;