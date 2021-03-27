import React from 'react';
import {Route, Switch, Redirect } from "react-router-dom";
import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import About from '../About/About';
import Footer from '../Footer/Footer';

function App() {
  return (
   <div className='app'> 
        <Header />
        <Switch>
          <Route exact path='/'>
            <Main/>
            <About />
          </Route>
          <Route exact path='/saved-news'>
            {/* Saved news component + */}
          </Route>
        </Switch>
        <Footer />
   </div>
  );
}

export default App;
