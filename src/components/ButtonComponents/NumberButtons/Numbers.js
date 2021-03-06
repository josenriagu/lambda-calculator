import React from "react";

//import any components needed
import NumberButton from './NumberButton';
// example of import from data.js. Note all the ../   This is how we move through folders. 
/* 
import { numbers } from '../../../data' 
*/
//Import your array data to from the provided data file
import { numbers } from '../../../data';

const Numbers = () => {
  // STEP 2 - add the imported data to state
  return (

    <div className="numbers">
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
      {
        numbers.map(number =>
          <NumberButton
            key={number.toString()}
            number={number}
          />
        )
      }
    </div>
  );
};

export default Numbers;