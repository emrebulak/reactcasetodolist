import { useState } from "react";
import "../../App.css";

function Header({ list, setlist }) {
  const [value, setValue] = useState("");

  return (
    <header className="header">
      <h1>todos</h1>
      <form>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.keyCode === 13 && value !== "") {
              list.push({ value: value, checked: false });
              setValue("");
              setlist([...list]);
            }
          }}
        />
      </form>
    </header>
  );
}

export default Header;
