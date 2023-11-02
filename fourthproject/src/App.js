import './App.css';
import React from 'react';
import ComponentUpdate from './Components/ComponentUpdate';
import SnapShot from './Components/SnapShot';
import Table from './Components/Table';
//import CustomTextInput from './Components/CustomTextInput';
//import List from './Components/List';
//import MenuBlog from './Components/MenuBlog';
//import MyComponent from './Components/MyComponent';
//import NameList from './Components/NameList';

/*const data=[
      {id:1,title:'First',content:'Welcome to Imarticus!!'},
      {id:2,title:'Second',content:'It is the best ReactJS Tutorial!!'},
      {id:3,title:'Third',content:'Here, you can learn all the ReactJS topics!!'}
]*/

//const myLists=['Peter','Sachin','Kevin','Dhoni','Alisa'];

function App() {
  return (
    <div>
      {/*
      <List/>
      <NameList myLists={myLists}/>
      <MenuBlog data={data}/>
      <MyComponent/>
      <CustomTextInput/> */}
      <ComponentUpdate/>
      <SnapShot/>
      <Container1/>
      <Table/>
    </div>
  );
}

class Container1 extends React.Component{
  constructor(props){
    super(props);
    this.state={show:true};
  }
  delHeader=()=>{
    this.setState({show:false});
  }
  render(){
    let myheader;
    if(this.state.show){
      myheader=<Child/>;
    };
    return(
      <div>
        {myheader}
        <button type='button' onClick={this.delHeader}>Delete Header</button>
      </div>
    );
  }
}

class Child extends React.Component{
  componentWillUnmount(){
    alert("The Component named Header is about to be unmounted");
  }
  render(){
    return(
      <h1>Hello World!</h1>
    );
  }
}

export default App;
