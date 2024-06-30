import React from "react";
import { CgToggleOff } from "react-icons/cg";

const Header = ({ darkMode, handleToggleDarkMode }) => {
  return (
    <div className="header">
      <h1>Notes</h1>
      <button
        onClick={() =>
          handleToggleDarkMode((previousDarkMode) => !previousDarkMode)
        }
        className="save"
      >
        {darkMode === true ? "Dark" : "White"}
      </button>
    </div>
  );
};

export default Header;
