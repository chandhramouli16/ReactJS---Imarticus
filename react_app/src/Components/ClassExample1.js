import React from "react";

class ClassExample1 extends React.Component{
    state={
        name:'Mouli',
        age:23
    }
    handleEvent=()=>{
        this.setState({name:'Mugiwara',age:19});
    }
    render(){
        return(
            <div>
                <h2>Name : {this.state.name}</h2>
                <h2>Age  : {this.state.age}</h2>
            <button onClick={this.handleEvent}>Click to update</button>
            </div>
        )
    }
}

export default ClassExample1;