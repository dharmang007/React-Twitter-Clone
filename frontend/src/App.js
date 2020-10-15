/**
 *  @author: Dharmang Solanki
 *  @description: The main container page which contains the three main 
 *  Components in the app
 */

/************ Imports ****************/
import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import Widgets from './components/Widgets';
/*************************************/

function App() {
  return (
    <div className="App">
      {/* Sidebar */}
      <Sidebar/>

      {/* Feeds */}
      <Feed/>
      
      {/* Widgets */}
      <Widgets/>
    
    </div>
  );
}

export default App;
