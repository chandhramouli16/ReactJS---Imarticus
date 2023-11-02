import { useEffect, useRef} from "react";

export function RefCheck(){
    //create a ref
    const divElement=useRef();

    //trigger on the first render of the component
    useEffect(()=>{
        console.log("The height of the div is: ",divElement.current.offsetHeight);
    },[]);

    return(
        <div ref={divElement}>
            <br/><br/>
            <h1>Learn about useRef!</h1>
        </div>
    );
}