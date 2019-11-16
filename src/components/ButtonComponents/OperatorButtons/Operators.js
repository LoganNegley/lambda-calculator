import React, {useState} from "react";
import {operators} from "../../../data";
import OperatorButton from "../OperatorButtons/OperatorButton";


//import any components needed

//Import your array data to from the provided data file

const Operators = () => {
  // STEP 2 - add the imported data to state
  const [operatorsArry, setOperatorsArry] = useState(operators);
  return (
    <div>
      {
        operatorsArry.map(eachOperator => (
        <OperatorButton eachOperator = {eachOperator} />
    
      ))
      }
    </div>
  );
};

export default Operators;
