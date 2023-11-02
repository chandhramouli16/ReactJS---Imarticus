import React,{useState} from "react";
function Example2(){
    const [name,setName]=useState("Mouli");
    function handleEvent(){
        setName("Mugiwara");
    }
    return(
        <div>
            <h1>Name : {name}</h1>
            <button onClick={handleEvent}>Click to update</button>
        </div>
    )
}

export default Example2;