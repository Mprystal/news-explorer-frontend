import React,{ useState } from 'react';
import {Route, Switch, Redirect } from "react-router-dom";
import './App.css';
import Hand from '../../images/Pointerhand.png';
import Header from '../Header/Header';
import Main from '../Main/Main';
import About from '../About/About';
import Footer from '../Footer/Footer';
import PopupWithForm from '../PopupWithForm/PopupWithForm';

function App() {
  const [loggedin, setloggedin] = useState(false);
  const [isSigninPopupOpen, setIsSigninPopupOpen] = useState(false);
  const [isSignupPopupOpen, setIsSignupPopupOpen] = useState(false);


  function handleLoginSubmit(e){
    e.preventDefault();
    setloggedin(true);
    closeAllPopups();
  }

  function handleLogoutClick(){
    setloggedin(false);
  }

  function handleSigninPopupClick() {
    setIsSigninPopupOpen(true);
  }

  function closeAllPopups() {
      setIsSigninPopupOpen(false);
      setIsSignupPopupOpen(false);    
  }

  function handleFormSwitchClick(){
    if(isSigninPopupOpen){
      setIsSignupPopupOpen(true);
      setIsSigninPopupOpen(false);
    } else if(isSignupPopupOpen){
      setIsSigninPopupOpen(true);
      setIsSignupPopupOpen(false);
    } 
  }


  return (
   <div className='app'> 
    <Header
     handleSigninPopupClick={handleSigninPopupClick}
     loggedin={loggedin}
     handleLogoutClick={handleLogoutClick}
    />
        <Switch>
          <Route exact path='/'>
            <Main loggedin={loggedin}/>
            <About />
          </Route>
          <Route exact path='/saved-news'>
            {/* Saved news component + */}
          </Route>
          <Route path='*'>
            <Redirect to='./' />
          </Route>
        </Switch>
        <Footer />
        <PopupWithForm 
        isSigninPopupOpen={isSigninPopupOpen}
        isSignupPopupOpen={isSignupPopupOpen}
        closeAllPopups={closeAllPopups}
        handleFormSwitchClick={handleFormSwitchClick}
        handleLoginSubmit={handleLoginSubmit}
        />
   </div>
  );
}

export default App;
