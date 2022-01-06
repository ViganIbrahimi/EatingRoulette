import React from "react";
const Button = ({ onclick }) => {
  return (
    <div>
      <button className="button" onClick={onclick}>
        Spin the Wheel
      </button>
    </div>
  );
};

export default Button;
