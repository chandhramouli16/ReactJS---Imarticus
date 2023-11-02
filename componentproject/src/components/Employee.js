import React from "react";

class Employee extends React.Component{
    state={
        firstName:"Ramesh",
        lastName: "Fadatare",
        email: "ramesh@gmail.com"
    }
    updateEmployee(){
        this.setState({
            lastName:"Jadhav",
            email:"jadhav.gmail.com"
        })
    }
    render(){
        return(
            <div className="center">
                <h1>Employee Details</h1><hr/>
                <p>{this.state.firstName}</p>
                <p>{this.state.lastName}</p>
                <p>{this.state.email}</p>
                <button onClick={()=>this.updateEmployee()}>Update Employee</button>
            </div>
        )
    }
}

export default Employee;