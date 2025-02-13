import React from "react";
import { Turn } from "../../models/Turn";
import Log from "../Log/Log";

interface Props {
  gameTurns: Turn[];
}

const Footer: React.FC<Props> = ({ gameTurns }) => {
  return (
    <footer>
      <Log turns={gameTurns} />

      <p className="music-artist-link">
        Music by &nbsp;
        <a href="https://pixabay.com/users/pumpupthemind-19969411/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=168895">
          Ivan Ohanezov &nbsp;
        </a>
        from &nbsp;
        <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=168895">
          Pixabay
        </a>
      </p>
    </footer>
  );
};

export default Footer;
