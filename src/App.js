import { useState, useEffect, useRef } from "react";
import GameDisplay from "./component/GameDisplay";
import GameScoreBoard from "./component/GameScoreBoard";
import MemoryGame from "./component/MemoryGame";

function App() {
  return (
    <main className="space-y-2">
      <MemoryGame />
      {/* <GameDisplay />
      <GameScoreBoard /> */}
    </main>
  );
}

export default App;
