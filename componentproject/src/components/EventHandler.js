import React from "react";

class EventHandler extends React.Component{
    state={
        name:''
    }
    changeText(event){
        this.setState({
            name:event.target.value
        });
    }
    render(){
        return(
            <div>
                <hr/>
                <h2>Simple Event Example</h2>
                Enter Company name: <input type="text" id="companyName" onChange={this.changeText.bind(this)}/>
                <h4>You Entered: {this.state.name}</h4>
                <hr/>
            </div>
        )
    }
}

export default EventHandler;