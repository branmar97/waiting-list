import './App.css';
import React, { useState } from 'react';
import Input from './components/Input';
import List from './components/List';

function App() {
  const [waitingList, setWaitingList] = useState([])

  return (
    <div className="App">
      <Input list={waitingList} updateList={setWaitingList} />
      <h1>People Waiting</h1>
      <List waiting={waitingList} />
    </div>
  );
}

export default App;
