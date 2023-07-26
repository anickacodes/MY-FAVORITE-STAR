import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  console.log(`${import.meta.env.VITE_NICKIS_VAR}`);
  return (
    <>
      <div>
        <h1>my name is {import.meta.env.VITE_NICKIS_VAR}</h1>
      </div>
    </>
  );
}

export default App;
