import React from "react";
import logo from "../../assets/tictactoe_logo.png";
import "./Header.css";

const Header: React.FC = () => {
  return (
    <header>
      <h1 className="sr-only">Tic Tac Toe Game</h1>
      <img src={logo} alt="Tic tac toe" />
    </header>
  );
};

export default Header;
