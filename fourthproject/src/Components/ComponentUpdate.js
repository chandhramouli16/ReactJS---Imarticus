import React from "react";

class ComponentUpdate extends React.Component{
    constructor(props){
        super(props);
        this.state={favouritecolor:"red"};
    }
    shouldComponentUpdate(){
        return false;
    }
    changeColor=()=>{
        this.setState({favouritecolor:"blue"})
    }
    render(){
        return(
            <div>
                <h1>My Favourite Color is {this.state.favouritecolor}</h1>
                <button type="button" onClick={this.changeColor}>Change Color</button>
            </div>
        )
    }
}

export default ComponentUpdate;