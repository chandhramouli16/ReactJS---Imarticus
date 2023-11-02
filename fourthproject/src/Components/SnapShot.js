import React from "react";

class SnapShot extends React.Component{
    constructor(props){
        super(props);
        this.state={favouritecolor:"red"};
    }
    componentDidMount(){
        setTimeout(()=>{
            this.setState({favouritecolor:"yellow"});
        },5000)
    }
    getSnapshotBeforeUpdate(prevProps,prevState){
        document.getElementById("div1").innerHTML="Before the update, the favourite was "+prevState.favouritecolor;
    }
    componentDidUpdate(){
        document.getElementById("div2").innerHTML="The updated favourite is "+this.state.favouritecolor;
    }
    render(){
        return(
            <div>
                <h1>My favourite color is {this.state.favouritecolor}</h1>
                <div id="div1"></div>
                <div id="div2"></div>
            </div>
        )
    }
}

export default SnapShot;