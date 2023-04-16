import React, { useState, useCallback } from "react";
import Button from "./components/UI/Button/Button";
import Demo from "./components/Demo/Demo";

import "./App.css";

function App() {
  const [showParagraph, setShowParagraph] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);

  //////useCallback
  const paragraphHandler = useCallback(() => {
    if (allowToggle) {
      setShowParagraph((prevShowParagraph) => !prevShowParagraph);
    }
  }, [allowToggle]);

  ///////

  const allowToggleHandler = () => {
    setAllowToggle(true);
  };
  return (
    <div className="app">
      <h1>Hi there!</h1>
      <Demo show={showParagraph}></Demo>
      <Button onClick={allowToggleHandler}>Allow Toggle</Button>
      <Button onClick={paragraphHandler}>Toggle Paragraph</Button>
    </div>
  );
}

export default App;
