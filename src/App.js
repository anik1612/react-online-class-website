import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';

function App() {
  return (
    <div className="fluid-container">
      <header>
        <Header></Header>
      </header>
      <main>
        <Shop></Shop>
      </main>
    </div >
  );
}

export default App;
