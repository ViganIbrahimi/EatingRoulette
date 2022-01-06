import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import "animate.css";
const Wheel = ({ onrandom }) => {
  return (
    <div className="wheel">
      <div className="icon">
        <FontAwesomeIcon className="" icon={faArrowDown} size="1rem" />
      </div>
      <ul className="circle" style={{ transform: `rotate(${onrandom}deg)` }}>
        <li>
          <div className="text">Diagonal</div>
        </li>
        <li>
          <div className="text">Papirun</div>
        </li>
        <li>
          <div className="text">Buffalo</div>
        </li>
        <li>
          <div className="text">Baron</div>
        </li>
        <li>
          <div className="text">Tradita</div>
        </li>
        <li>
          <div className="text">Meqa</div>
        </li>
        <li>
          <div className="text">Shpija e Vjeter</div>
        </li>
        <li>
          <div className="text">Pishat</div>
        </li>
        <li>
          <div className="text">Trock</div>
        </li>
        <li>
          <div className="text">Pizza Crust</div>
        </li>
        <li>
          <div className="text">Extreme Grill</div>
        </li>
        <li>
          <div className="text">Papirun</div>
        </li>
      </ul>
    </div>
  );
};

export default Wheel;
