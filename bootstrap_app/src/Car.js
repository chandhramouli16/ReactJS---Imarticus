import { useState } from "react";

function Car(){
    /*const [brand,setBrand]=useState("Ford");
    const [model,setModel]=useState("Mustang");
    const [year,setyear]=useState("1964");
    const [color,setColor]=useState("red");

    return(
        <>
            <h1>My {brand}</h1>
            <p>
                It is a {color} {model} from {year}
            </p>
        </>
    )*/
    const [car,setCar]=useState({
        brand:"Ford",
        model:"Mustang",
        year:"1964",
        color:"Red"
    });

    return(
        <>
            <h1>My {car.brand}</h1>
            <p>
                It is a {car.color} {car.model} from {car.year}
            </p>
        </>
    )
}

export default Car;