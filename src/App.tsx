import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Player from "./components/Player/Player";
import { PlayersNames } from "./models/PlayersNames";

const players: PlayersNames = {
  X: "Player 1",
  O: "Player 2",
};

function App() {
  const [playerNames, setPlayerNames] = useState<PlayersNames>(players);

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
      </main>
    </div>
  );
}

export default App;
