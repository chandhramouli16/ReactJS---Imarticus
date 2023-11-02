import './App.css';
import Calculator from './CalculatorApp/Calculator';
import { Application } from './Components/Application';
import { Application1 } from './Components/Application1';
import { Background } from './Components/Background';
import ClassExample1 from './Components/ClassExample1';
import Component1 from './Components/Component1';
import Counter from './Components/Counter';
import Example1 from './Components/Example1';
import FunctionExample1 from './Components/FunctionExample1';
import { RefCheck } from './Components/RefCheck';
import Reference from './Components/Reference';
import { Reference1 } from './Components/Reference1';
import Timer from './Components/Timer';
import { TodoCheck } from './Components/TodoCheck';
import Products from './Products';


function App() {
  return (
    <div className="App">
      {/*<Example1/>
      <ClassExample1/>
      <FunctionExample1/>
      <Timer/>
      <Counter/>
      <Component1/>
      <Reference/>
      <Reference1/>
      <Application/>
      <Application1/>
      <RefCheck/>
      <Background/>
      <TodoCheck/>*/}
      <Products/>
    </div>
  );
}

export default App;
