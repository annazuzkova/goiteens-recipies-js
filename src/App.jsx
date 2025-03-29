import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Recipe } from "./components/Recipe";
import recipes from "./data/recipies.json";
function App() {
  return (
    <>
      <Recipe recipes={recipes} />
    </>
  );
}

export default App;
