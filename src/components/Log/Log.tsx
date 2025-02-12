import React from "react";
import "./Log.css";
import { Turn } from "../../models/Turn";

interface Props {
  turns: Turn[];
}

const Log: React.FC<Props> = ({ turns }) => {
  return (
    <section id="logs">
      {turns &&
        turns.map((turn, i) => (
          <p
            key={turn.id}
            className={`${i === 0 ? "last-log" : ""} ${
              turn.player === "X" ? "turn-X-style" : "turn-O-style"
            }`}
          >
            <span>{turn.player}</span> played row <span>{turn.row + 1}</span>,
            column <span>{turn.col + 1}</span>
          </p>
        ))}
    </section>
  );
};

export default Log;
