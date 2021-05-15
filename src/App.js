import './App.css';
import React, { useState } from 'react';
import Input from './components/Input';
import List from './components/List';

function App() {
  const [waitingList, setWaitingList] = useState([])

  return (
    <div className="App">
      <Input />
      <List />
    </div>
  );
}

export default App;
