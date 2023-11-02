import { MyContext } from './Components/MyContext';
import MyComponent from './Components/MyComponent';
import Product from './Components/Product';
import { useState } from 'react';
import Webpages from './WebPages/Index';
import PostsWebpages from './WebPages/PostsIndex';
import EmployeeForm from './EmployeeComponent/EmployeeForm';
import "bootstrap/dist/css/bootstrap.min.css";
import OnlineComponent from './Components/OnlineComponent';

function App() {
  //const [text,setText]=useState("Imarticus");
  return (
    <div>
      {/*<MyContext.Provider value={{text,setText}}>
        <Product/>
      </MyContext.Provider>
      <Webpages/>
      <PostsWebpages/>
      <h1 style={{color:"red"}}>Adding the Employee details</h1>
      <div class="col"><EmployeeForm/></div>*/}
      <OnlineComponent/>
    </div>
  );
}

export default App;
