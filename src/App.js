import React from 'react';
import './App.css';
import Calculator from './components/Calculator'
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <div>
      <GlobalProvider>
        <Calculator />
      </GlobalProvider>
    </div>
  );
}

export default App;
