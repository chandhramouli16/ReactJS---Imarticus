import './App.css';
import Constructor from './components/Constructor';
import Controlled from './components/Controlled';
import Example from './components/Example';
import Example1 from './components/Example1';
import MultiInputControlled from './components/MultiInputControlled';
import NotificationMsg from './components/NotificationMsg';
import Uncontrolled from './components/Uncontrolled';
//import Counter from './components/Counter';
//import Employee from './components/Employee';
//import Greeting from './components/Greeting';
//import { Student1 } from './components/PropsDemo';
//import { Skills } from './components/Skills';
//import { Student } from './components/Student';
//import Welcome from './components/Welcome';
//import EventHandler from './components/EventHandler';
//import LoginForm from './components/LoginForm';
//import Check from './components/Check';
//import State from './components/State';
//import Property from './components/Property';
//import Test from './components/Test';

function App() {
  /*
  const student={
    firstName: "Ramesh",
    lastName: "Fadatare",
    email: "ramesh@gmail.com"
  }

  const skills=['HTML','CSS','JavaScript','ReactJs'];
  */
  return (
    <div className="App">
      {/*<Check />
      <Test/>
      <State/>
      <Property/>*/}
      {/*<Employee/>
      <Counter/>
      <Greeting/>
      <Welcome name="Ramesh"/>
      <Student
        firstName="Monkey D"
        lastName="Luffy"
        email="mugiwara@gmail.com"
      />
      <Student1 stud={student}/>
      <Skills data={skills}/>
      <EventHandler/>
      <LoginForm/>*/}
      <Constructor/>
      <Uncontrolled/>
      <Controlled/>
      <MultiInputControlled/>
      <Example/>
      <Example1/>
      <NotificationMsg text='Hi All'/>
    </div>
  );
}

export default App;
