import { useState } from "react";
import "./App.css";

/* Components */
import Header from "./components/Header/Header";
import Player from "./components/Player/Player";
import GameBoard from "./components/GameBoard/GameBoard";

/* Models */
import { PlayersNames } from "./models/PlayersNames";
import { Turn } from "./models/Turn";

const players: PlayersNames = {
  X: "Player 1",
  O: "Player 2",
};

const initialBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function App() {
  const [playerNames, setPlayerNames] = useState<PlayersNames>(players);
  const [gameTurns, setGameTurns] = useState<Turn[]>([]);

  // make a deep copy of initialBoard
  let board = [...initialBoard.map((row) => [...row])];

  console.log(board);

  return (
    <div id="container">
      <Header />
      <main id="game-container">
        <section id="players">
          <Player
            name={playerNames.X}
            symbol="X"
            isActive={true}
            setPlayerNames={setPlayerNames}
          />
          <Player
            name={playerNames.O}
            symbol="O"
            isActive={false}
            setPlayerNames={setPlayerNames}
          />
        </section>
        <GameBoard board={board} />
      </main>
    </div>
  );
}

export default App;
