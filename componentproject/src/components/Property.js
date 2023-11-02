import React,{Component} from "react";

class Property extends Component{
    render(){
        return(
            <div>
                <h1>Default Props Example</h1>
                <h3>Welcome to {this.props.name}</h3>
                <p>Imarticus is one of the best Java training institute in Coimbatore</p>
                <p>Location: {this.props.location}</p>
                <p>Training: {this.props.training}</p>
            </div>
        )
    }
}

Property.defaultProps={
    name:"Imarticus",
    location:"Coimbatore",
    training:"FSD"
}

export default Property;