import { useState } from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import jumboData from './fixtures/jumbo.json';
import Jumbotron from "./components/jumbotron";
import React from 'react'; 


function App() {
  

  return (
    <>
      <div>
       <h1> Hello React</h1>
        <Jumbotron.Container>
          {jumboData.map((item) => ( 
            <Jumbotron key={item.id} direction={item.direction}>
              <p>Hello</p>
              </Jumbotron>
          ))}
        </Jumbotron.Container>
      </div>
      
    </>
  );
}

export default App;
