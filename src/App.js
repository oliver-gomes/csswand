import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import EffectBoard from "./components/EffectBoard/EffectBoard";

import { css } from "emotion";
import cssLetter from "./css-letter.png";

function App() {
  return (
    <div className="App">
      <Header />

      <div>
        <p
          className={css`
            margin: 0;
            font-size: 18px;
            margin-top: 40px;
            letter-spacing: 4px;
          `}
        >
          Welcome to
        </p>
        <br />
        <img src={cssLetter} alt="css gradient image" width="250" />
        <p
          className={css`
            margin: 0;
            font-size: 18px;
            margin-top: 40px;
            letter-spacing: 2px;
          `}
        >
          Easy Copy-Paste Beautiful CSS <br />
          That can be easily customized further at your own choice
        </p>
      </div>

      <EffectBoard />
    </div>
  );
}

export default App;
