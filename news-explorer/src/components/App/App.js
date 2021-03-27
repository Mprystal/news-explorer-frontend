import React from 'react';
import {Route, Switch, Redirect } from "react-router-dom";
import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';

function App() {
  return (
   <div className='app'> 
        <Header />
        <Switch>
          <Route exact path='/'>
            <Main/>
          </Route>
          <Route exact path='/saved-news'>
            {/* Saved news component + */}
          </Route>
        </Switch>
   </div>
  );
}

export default App;
