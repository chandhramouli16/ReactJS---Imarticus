import { useEffect, useState } from "react";

export function Reference1(){
    const [counter,setCounter]=useState(0);

    //Increase the counter by one
    const handleIncreaseCounter=()=>{
        setCounter(counter+1);
    };

    useEffect(()=>{
        console.log("counter changed to: ",counter);
    },[counter]);

    return(
        <>
            <h2>Value: {counter}</h2>
            <button onClick={handleIncreaseCounter}>IncreaseCounter</button>
        </>
    );
}