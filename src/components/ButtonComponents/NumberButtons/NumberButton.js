import React from "react";

const NumberButton = (props) => {
  const { number } = props; // destructuring
  return (
    <div className="number-button">
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      {number}
    </div>
  );
};

export default NumberButton;