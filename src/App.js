import React from 'react';
import Route from "./routes";
import './App.css';
import Aux from "./Hoc/Wrapper";

function App() {
  return (
    <div className="App" style={{height: '100%'}}>
      <Aux>
         <Route/>
      </Aux>
     
    </div>
  );
}

export default App;
