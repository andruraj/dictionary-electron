import React from "react";
import dict from "./resources/dictionary.json";

const App = () => {
  const [word, setWord] = React.useState("");
  const [meaning, setMeaning] = React.useState("");
  return (
    <div>
      <div className="dict" style={{ margin: "20px 40px" }}>
        <input
          type="search"
          name="search"
          autoFocus
          value={word}
          onChange={e => setWord(e.target.value)}
          placeholder="Search..."
          style={{
            border: "none",
            borderBottom: "1px solid darkgrey",
            textAlign: "center",
            outline: "none",
            fontSize: "16px",
            padding: "5px",
            width: "100%"
          }}
          onKeyPress={e => {
            if (e.key === "Enter") {
              setMeaning(dict[word]);
            }
          }}
        />{" "}
        <br />
        <br />
        <div
          style={{
            overflow: "auto",
            border: meaning ? "1px solid darkgrey" : "none",
            borderRadius: "2px",
            padding: "10px"
          }}
        >
          <b style={{ color: "red" }}>{word}</b> <br /> <br />
          <p style={{ color: "blue", lineHeight: "1.5" }}>{meaning}</p>
        </div>
      </div>
    </div>
  );
};

export default App;
