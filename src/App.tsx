import { useState } from "react";
import "./App.css";
import { WINNING_COMBOS } from "./data/winningCombinations";
import { v4 as uuidv4 } from "uuid";

/* Components */
import Header from "./components/Header/Header";
import Player from "./components/Player/Player";
import GameBoard from "./components/GameBoard/GameBoard";
import GameOver from "./components/GameOver/GameOver";
import Log from "./components/Log/Log";

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
  return gameTurns.length ? (gameTurns[0].player === "X" ? "O" : "X") : "X";
};

const determineWinner = (
  updatedBoard: Board,
  playersNames: PlayersNames
): string => {
  let winner = "";

  for (const combination of WINNING_COMBOS) {
    const firstCellSymbol =
      updatedBoard[combination[0].row][combination[0].col];
    const secondCellSymbol =
      updatedBoard[combination[1].row][combination[1].col];
    const thirdCellSymbol =
      updatedBoard[combination[2].row][combination[2].col];

    if (
      firstCellSymbol &&
      firstCellSymbol === secondCellSymbol &&
      firstCellSymbol === thirdCellSymbol
    ) {
      if (firstCellSymbol === "X" || firstCellSymbol === "O") {
        winner = playersNames[firstCellSymbol as keyof PlayersNames];
      }
    }
  }

  return winner;
};

function App() {
  const [playersNames, setPlayerNames] = useState<PlayersNames>(players);
  const [gameTurns, setGameTurns] = useState<Turn[]>([]);

  // make a deep copy of initialBoard
  let board = generateGameBoard(gameTurns);
  const currentPlayer = getCurrentPlayer(gameTurns);
  const winner = determineWinner(board, playersNames);
  const isDraw = gameTurns.length === 9 && !winner;

  function handleSelectCell(row: number, col: number): void {
    setGameTurns((prev) => {
      const updatedTurns = [
        { id: uuidv4(), player: currentPlayer, row: row, col: col },
        ...prev,
      ];

      return updatedTurns;
    });
  }

  function resetGame() {
    setGameTurns([]);
    setPlayerNames(players);
  }

  return (
    <div id="container">
      <Header />
      <main id="game-container">
        <section id="players">
          <Player
            symbol="X"
            isActive={currentPlayer === "X"}
            playersNames={playersNames}
            setPlayerNames={setPlayerNames}
          />
          <Player
            symbol="O"
            isActive={currentPlayer === "O"}
            playersNames={playersNames}
            setPlayerNames={setPlayerNames}
          />
        </section>
        {(winner || isDraw) && (
          <GameOver winner={winner} onResetGame={resetGame} />
        )}
        <GameBoard board={board} onSelectCell={handleSelectCell} />
      </main>
      <Log turns={gameTurns} />
    </div>
  );
}

export default App;
