import React from "react";
import { ButtonCss } from "./compontnets/ButtonCss.js";
import { Button } from "./components/Button.js";

export const App = () => {
  return (
    <div class="app">
      <h1 className={ButtonCss}>Hello</h1>
      <button>Click Me!</button>
    </div>
  );
};
