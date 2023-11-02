import { useState,useEffect } from "react";

function Timer(){
    const[count,setCount]=useState(0);
    useEffect(()=>{
        setTimeout(()=>{
            setCount(count+1);    
        },1000)
    })
    
    return(
        <> {/* Fragment */}
            <h1>useEffect Example</h1>
            <h2>I have rendered {count} times</h2>
        </>
    )
}

export default Timer;