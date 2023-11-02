import React from "react";
import '../App.css';

class State extends React.Component{
    state={
        name:'Hello World',
        id: 102,
        contact: 7810098558
    }
    render(){
        return(
            <div className="App-header">
                <h1>Name: {this.state.name}</h1>
                <h1>Id: {this.state.id}</h1>
                <h1>Contact: {this.state.contact}</h1>
            </div>
        )
    }
}

export default State;