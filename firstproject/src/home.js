import React from "react";
function home(){
    return(
        <div class="App">
            <h1>Welcome to React Family</h1>
            <h2>Imarticus Learning</h2>
            <h3>Coimbatore</h3>
            Username: <input type="text" name="username" value="Mouli"/>
            <h4>Adding 2 numbers: 10+20 = {10+20}</h4>
            {/*Interpolation*/}
        </div>
    );
}

export default home;