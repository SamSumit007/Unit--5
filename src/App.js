import React from "react";
import "./styles.css";

import { useState } from "react"
import { Button } from "./Component/Button";


export default function App() {
  
  const [ theme, setTheme ] = useState("light");
  return (
    <div className="App">
     

      <Button theme={theme}
      variant= "hollow"
       onClick={() => {

      }}
      > Primary Button
        </Button>

        <button theme={theme}
        onClick={()=>{
          setTheme(theme === "light" ? "dark" : "light");

        }} 
        >
          Change theme
        </button>
    </div>
  );
}


