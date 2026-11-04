import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div
      style={{
        background: theme === "light" ? "white" : "#222",
        color: theme === "light" ? "black" : "white",
        padding: "30px"
      }}
    >
      <h1>My React App</h1>

      <p>Current Theme: {theme}</p>

      <button onClick={toggleTheme}>
        Change Theme
      </button>
    </div>
  );
}

export default Navbar;