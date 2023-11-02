import React from "react";

class Register extends React.Component{
    render(){
        return(
            <div className="App-header">
                <form>
                    <table style={{textAlign:"left"}}>
                        <thead>
                            <td colSpan={2}><h1>Register form</h1></td>
                        </thead>
                        <tr>
                            <td><label>First Name: </label></td>
                            <td><input type="text" placeholder="FirstName"/></td>   
                        </tr>
                        <tr>
                            <td><label>Last Name: </label></td>
                            <td><input type="text" placeholder="LastName"/></td>
                        </tr>
                        <tr>
                            <td><label>Email: </label></td>
                            <td><input type="email" placeholder="Email" required/></td>
                        </tr>
                        <tr>
                            <td><label>Password: </label></td>
                            <td><input type="password" placeholder="Password" required/></td>
                        </tr>
                        <tr>
                            <td><label>Date of Birth: </label></td>
                            <td><input type="date" /></td>
                        </tr>
                        <tr>
                            <td><label>Age: </label></td>
                            <td><input type="number"/></td>
                        </tr>
                        <tr>
                            <td><label>Gender: </label></td>
                            <td><input type="radio"/>Male <input type="radio"/>Female</td>
                        </tr>
                        <tr>
                            <td><label>Address: </label></td>
                            <td><textarea rows="5"></textarea></td>
                        </tr>
                        <tr>
                            <td colspan="2" align="center"><input type="reset" name="Reset"/><input type="submit" name="Submit"/></td>
                        </tr>
                    </table>
                </form>
            </div>
        )
    }
}

export default Register;