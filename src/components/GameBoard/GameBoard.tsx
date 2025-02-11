import React from "react";
import "./GameBoard.css";

interface Props {
  board: [][];
}

const GameBoard: React.FC<Props> = ({ board }) => {
  return (
    <section id="game-board-container">
      <ol className="board">
        {board.map((row, i) => (
          <li key={i}>
            <ol className="row">
              {row.map((cell, i) => (
                <li key={i} className="cell">
                  <button>{cell}</button>
                </li>
              ))}
            </ol>
          </li>
        ))}
      </ol>
    </section>
  );
};

export default GameBoard;
