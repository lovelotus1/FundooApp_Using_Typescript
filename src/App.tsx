import React from 'react';
import './App.css';
import Dashboard from './components/Dashboard/dashboard';
import Header from './components/Header/header';
import Signin from './components/page/Sigin/signin';
import Signup from './components/page/Siginup/signup';
import Takenote1 from './components/TakeNote1/takenote1';
import Takenote2 from './components/TakeNote2/takenote2';
import { Takenote3 } from './components/TakeNote3/takenote3';



function App() {
  return (
    <div className="App">
      {/* <Signin />
      <Signup /> */}
      <Takenote1/>
      <Dashboard/>
      
      {/* <Takenote3/> */}
       {/* <Takenote2/>  */}
       {/* <Header />  */}
    </div>
  );
}

export default App;
