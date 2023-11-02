import React from "react";


class Login extends React.Component{
    render(){
        return(
            <div className="App-header">
                <form>
                    <table align="center">
                        <tr>
                            <td><label>Username: </label></td>
                            <td><input type="text" placeholder="xxx@gmail.com"></input></td>
                        </tr>
                        <tr>
                            <td><label>Password: </label></td>
                            <td><input type="password" placeholder="xxxxxxxx"></input></td>
                        </tr>
                        <tr>
                            <td><input type="submit" value="Login"></input></td>
                            <td><input type="reset" value="Reset"></input></td>
                        </tr>
                    </table>

                </form>
            </div>
        )
    }
}

export default Login;