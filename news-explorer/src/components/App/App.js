import React,{ useState, useEffect } from 'react';
import {Route, Switch, Redirect } from "react-router-dom";
import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import About from '../About/About';
import Footer from '../Footer/Footer';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import MobileNav from '../MobileNav/MobileNav';

function App() {
  const [loggedin, setloggedin] = useState(false);
  const [isSigninPopupOpen, setIsSigninPopupOpen] = useState(false);
  const [isSignupPopupOpen, setIsSignupPopupOpen] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)

  useEffect(()=>{
    if(isMobileNavOpen){
      window.onscroll = function(){window.scrollTo(0,0)}
    } else if(!isMobileNavOpen){
      window.onscroll = null;
    }    
  })

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
      setIsMobileNavOpen(false); 
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

  function handleMobileNav(){
    setIsMobileNavOpen(true)
  }



  return (
   <div className='app'> 
   {isMobileNavOpen ? <MobileNav isMobileNavOpen={isMobileNavOpen} loggedin={loggedin} handleLogoutClick={handleLogoutClick} /> : null}
    <Header
     handleSigninPopupClick={handleSigninPopupClick}
     loggedin={loggedin}
     handleLogoutClick={handleLogoutClick}
     handleMobileNav={handleMobileNav}
     isMobileNavOpen={isMobileNavOpen}
     closeAllPopups={closeAllPopups}
    />
        <Switch>
          <Route exact path='/'>
            <Main loggedin={loggedin} handleSigninPopupClick={handleSigninPopupClick}/>
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
