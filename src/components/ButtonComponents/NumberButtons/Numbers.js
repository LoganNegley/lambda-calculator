import React, {useState} from "react";
import {numbers} from "../../../data"
import NumberButton from "../NumberButtons/NumberButton";
import { arrayExpression } from "@babel/types";


const Numbers = () => {
  // STEP 2 - add the imported data to state
  const [numbersArry, setNumbersArry] = useState(numbers);
  return (
    <div className = "number-buttons-container">
      {

        numbersArry.map(eachNumber => (
        <NumberButton eachNumber = {eachNumber} />
      ))

      }
    </div>
  );
};

export default Numbers;
