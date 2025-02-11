import React, { useState, Dispatch, SetStateAction } from "react";
import "./Player.css";
import { PlayersNames } from "../../models/PlayersNames";

interface Props {
  name: string;
  symbol: string;
  isActive: boolean;
  setPlayerNames: Dispatch<SetStateAction<PlayersNames>>;
}

const Player: React.FC<Props> = ({
  symbol,
  name,
  isActive,
  setPlayerNames,
}) => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [playerName, setPlayerName] = useState<string>(name);

  function handleIsEditing() {
    setIsEditing((prev) => !prev);
  }

  function handleEditPlayer(e: React.ChangeEvent<HTMLInputElement>) {
    const newName = e.target.value;
    setPlayerName(newName);
    setPlayerNames((prevState: PlayersNames) => {
      return {
        ...prevState,
        [symbol]: newName,
      };
    });
  }

  return (
    <section className={`player-container ${isActive ? "active" : ""}`}>
      <div className="player-identity">
        {!isEditing && <span className="player-name">{playerName}</span>}
        {isEditing && (
          <input
            type="text"
            value={playerName}
            onChange={(e) => handleEditPlayer(e)}
          />
        )}
        <span className="player-symbol">{symbol}</span>
      </div>

      <button onClick={handleIsEditing}>{isEditing ? "Save" : "Edit"}</button>
    </section>
  );
};

export default Player;
