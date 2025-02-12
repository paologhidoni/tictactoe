import React from "react";
import "./GameOver.css";

interface Props {
  winner: string;
  onResetGame: () => void;
}

const GameOver: React.FC<Props> = ({ winner, onResetGame }) => {
  return (
    <section id="game-over">
      {winner && <h2>{winner} won!</h2>}
      {!winner && <h2>It was a draw!</h2>}
      <button onClick={onResetGame}>Play again!</button>
    </section>
  );
};

export default GameOver;
