import React, { useContext } from "react";
import { MyContext } from "./MyContext";

function MyComponent(){
    const {text,setText}=useContext(MyContext);
    return(
        <>
            <h1>{text}</h1>
            <button onClick={()=>setText("Hello World!")}>ClickMe</button>
        </>
    )
}

export default MyComponent;