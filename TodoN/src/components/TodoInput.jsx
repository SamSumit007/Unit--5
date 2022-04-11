import { useState } from "react"

export const TodoInput =({getData})=>{
    const[text, SetText] = useState("");


    return (
        <div>
            <input onChange={(e)=>{
                SetText(e.target.value);
            }}  type="text" 
            placeholder="Write Something"/>
            <button onClick={()=>{getData(text)
            }}> + </button>
        </div>
    );
};