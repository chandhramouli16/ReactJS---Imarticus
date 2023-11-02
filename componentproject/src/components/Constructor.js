import React from "react";

/*
    class Constructor extends React.Component{
        constructor(props){
            //this.lname="Wick";
            super(props);
            this.state={
                fname:"John"
            };
        }

        render(){
            return(
                <div>
                    <p>Name: {this.state.fname}</p>
                </div>
            )
        }
    }
*/
class Constructor extends React.Component{
    constructor(props){
        super(props);
        this.state={
            data: 'www.imarticus.org'
        }
        this.handleEvent=this.handleEvent.bind(this);
    }
    handleEvent(){
        console.log(this.state.data);
    }
    render(){
        return(
            <div className="App">
                <h2>React Constructor Exampe</h2>
                <input type="text" value={this.state.data}/>
                <button onClick={this.handleEvent}>Please Click</button>
            </div>
        )
    }
}

export default Constructor;