import React from 'react';
import './App.sass';
import Router from './router'
// import Navbar from './components/Navbar'

function App() {
  return (
    <div className={'app'}>
      {/* <Navbar /> */}
      <Router />
    </div>
  );
}

export default App;
