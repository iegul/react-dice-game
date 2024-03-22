import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

import DiceImage1 from "./images/Dice1.png";
import DiceImage2 from "./images/Dice2.png";
import DiceImage3 from "./images/Dice3.png";
import DiceImage4 from "./images/Dice4.png";
import DiceImage5 from "./images/Dice5.png";
import DiceImage6 from "./images/Dice6.png";

function App() {
  var diceImages = [
    DiceImage1,
    DiceImage2,
    DiceImage3,
    DiceImage4,
    DiceImage5,
    DiceImage6,
  ];

  const [image, setImage] = useState(diceImages[0]);
  const [image2, setImage2] = useState(diceImages[1]);

  const rollDice = () => {
    var randomNum1 = Math.floor(Math.random() * 6);
    var randomNum2 = Math.floor(Math.random() * 6);
    setImage(diceImages[randomNum1]);
    setImage2(diceImages[randomNum2]);
  };

  return (
    <div className="App">
      <center>
        <h2>WELCOME DİCE ROLLER GAME</h2>
        <div className="container">
          <img className="square" src={image}></img>
          <div style={{ width: "5px", display: "inline-block" }}></div>
          <img className="square" src={image2}></img>
        </div>
        <button type="button" class="btn btn-outline-info" onClick={rollDice}>
          ROLL
        </button>
      </center>
    </div>
  );
}

export default App;
