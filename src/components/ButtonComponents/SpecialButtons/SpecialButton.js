import React from "react";
import Specials from "./Specials";
const SpecialButton = (props) => {

  return (
    <button>
    {props.eachSpecial}
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </button>
  );
};
export default SpecialButton