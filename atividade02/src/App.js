import React from 'react';
import './App.css';
import Arena from "./components/Questao1";
import Arena2 from "./components/Questao2";
import World from "./components/Questao3";
import Questao4 from './components/Questao4';

function App() {
  return (
    <div>
      <Arena/>
      <Arena2/>
      <World>
        <Arena/>
      </World>
      <Questao4 arena="teste"/>
    </div>
  );
}

export default App;
