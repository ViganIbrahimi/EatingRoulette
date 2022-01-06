import React, { useState } from "react";
import "./App.css";
import "animate.css";
import Header from "./components/Header";
import Button from "./components/Button";
import Wheel from "./components/Wheel";

function App() {
  const [random, setRandom] = useState(0);
  const x = 1024;
  const y = 99999;

  const SpinTheWheel = () => {
    setRandom(Math.floor(Math.random() * (x - y)) + y);
  };

  return (
    <div className="App">
      <Header />
      <Button onclick={() => SpinTheWheel()} />
      <Wheel onrandom={random} />
    </div>
  );
}

export default App;
