import React from "react";
import "./GameBoard.css";
import { Board } from "../../models/Board";

interface Props {
  board: Board;
  onSelectCell: (row: number, col: number) => void;
}

const GameBoard: React.FC<Props> = ({ board, onSelectCell }) => {
  return (
    <section id="game-board-container">
      <ol className="board">
        {board.map((row, rowIndex) => (
          <li key={rowIndex}>
            <ol className="row">
              {row.map((cell, colIndex) => (
                <li key={colIndex + "_" + cell} className="cell">
                  <button
                    onClick={() => onSelectCell(rowIndex, colIndex)}
                    disabled={cell !== null}
                    className={
                      cell !== null
                        ? cell === "X"
                          ? "selected-X"
                          : "selected-O"
                        : ""
                    }
                  >
                    {cell}
                  </button>
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
