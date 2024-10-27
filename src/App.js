import { useState, useEffect, useRef } from "react";
import GameDisplay from "./component/GameDisplay";
import GameScoreBoard from "./component/GameScoreBoard";

function App() {
  return (
    <main>
      <GameDisplay />
      <GameScoreBoard />
    </main>
  );
}

export default App;
