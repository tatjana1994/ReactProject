import ReactDom from "react-dom";
import React, { useState } from "react";
import Input from "./components/input";
import Display from "./components/display";

const App = () => {
  const [input, setInput] = useState("");

  return (
    <div>
      <Input getInput={(value) => setInput(value)} />
      <Display value={input} />
    </div>
  );
};

ReactDom.render(<App />, document.getElementById("root"));
