import './App.css';
import * as React from 'react';
import Channels from './components/Channels';
import Events from './components/Events';
import Profile from './components/Profile';

function App() {
  return (
    <div className="App">
      <Profile />
      <Events />
      <Channels />
    </div>
  );
}

export default App;
