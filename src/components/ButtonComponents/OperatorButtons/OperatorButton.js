import React from "react";
import Operators from "./Operators";

const OperatorButton = (props) => {
  return (
    <button>
  {props.eachOperator.char}
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </button>
  );
};

export default OperatorButton;