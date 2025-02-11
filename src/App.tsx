import { useState } from "react";
import "./App.css";

/* Components */
import Header from "./components/Header/Header";
import Player from "./components/Player/Player";
import GameBoard from "./components/GameBoard/GameBoard";

/* Models */
import { PlayersNames } from "./models/PlayersNames";
import { Turn } from "./models/Turn";
import { Board } from "./models/Board";

const players: PlayersNames = {
  X: "Player 1",
  O: "Player 2",
};

const initialBoard: Board = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

const generateGameBoard = (gameTurns: Turn[]): Board => {
  const gameBoard = [...initialBoard.map((row) => [...row])];

  for (const turn of gameTurns) {
    gameBoard[turn.row][turn.col] = turn.player;
  }

  return gameBoard;
};

const getCurrentPlayer = (gameTurns: Turn[]): string => {
  const randomNumber = Math.floor(Math.random() * 2) + 1;
  let currentPlayer = randomNumber === 1 ? "X" : "O";
  if (gameTurns.length) {
    currentPlayer = gameTurns[0].player === "X" ? "O" : "X";
  }
  return currentPlayer;
};

function App() {
  const [playerNames, setPlayerNames] = useState<PlayersNames>(players);
  const [gameTurns, setGameTurns] = useState<Turn[]>([]);

  // make a deep copy of initialBoard
  let board = generateGameBoard(gameTurns);
  const currentPlayer = getCurrentPlayer(gameTurns);

  function handleSelectCell(row: number, col: number): void {
    console.log(row, "ROW");
    console.log(col, "COL");

    setGameTurns((prev) => {
      const updatedTurns = [
        { player: currentPlayer, row: row, col: col },
        ...prev,
      ];

      return updatedTurns;
    });
  }

  console.log(board);

  return (
    <div id="container">
      <Header />
      <main id="game-container">
        <section id="players">
          <Player
            name={playerNames.X}
            symbol="X"
            isActive={currentPlayer === "X"}
            setPlayerNames={setPlayerNames}
          />
          <Player
            name={playerNames.O}
            symbol="O"
            isActive={currentPlayer === "O"}
            setPlayerNames={setPlayerNames}
          />
        </section>
        <GameBoard board={board} onSelectCell={handleSelectCell} />
      </main>
    </div>
  );
}

export default App;
