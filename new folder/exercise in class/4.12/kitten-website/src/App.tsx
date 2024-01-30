import React from 'react';
import logo from './logo.svg';
import './App.css';
import KittenFood from './components/animalFood/KittenFood';
import Kitten from './components/animals/kitten/Kitten';

function App() {
  return (
    <div className="App">
        <Kitten/>
        <KittenFood/>
    </div>
  );
}

export default App;
