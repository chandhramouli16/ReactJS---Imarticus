import React from "react";

class Login extends React.Component{
    render(){
        const ans=event=>alert(event.target.id);
        return(
            <div className='App'>
                Username: <input type="text" name="text"/><br/>
                Password: <input type="password" name="pass"/><br/>
                <button id="Success" onClick={ans}>Click here</button>
            </div>
        )
    }
}

export default Login;