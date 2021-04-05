import React,{ useState, useEffect, useCallback } from 'react';
import {Route, Switch, Redirect, useLocation } from "react-router-dom";
import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import About from '../About/About';
import Footer from '../Footer/Footer';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import MobileNav from '../MobileNav/MobileNav';
import SavedNews from '../SavedNews/SavedNews';
import ValidateForm from '../ValidateForm/ValidateForm';

function App() {
  const [loggedin, setloggedin] = useState(false);
  const [isSigninPopupOpen, setIsSigninPopupOpen] = useState(false);
  const [isSignupPopupOpen, setIsSignupPopupOpen] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const [values, setValues] = useState({
    username: '',
    email: '',
    password: '',
    name: ''
  })
  const [errors, setErrors] = useState({
    username: '',
    email: '',
    password: '',
    name: ''
  });
  const location = useLocation();
  const savedNewsLocation = location.pathname === '/saved-news';


  useEffect(()=>{
    if(isMobileNavOpen){
      document.body.style.overflow = 'hidden';
    } else if (!isMobileNavOpen){
      document.body.style.overflow = 'unset';
    }
  }, [isMobileNavOpen])


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
      resetForm()
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

  const handleFormChange = e => {
    const {name, value} = e.target;
    console.log(name, value)
    setValues({
      ...values,[name]: value
    })
    ValidateForm(errors, values, name);
    setErrors({...errors, [name]: errors[name]})
    setIsValid(e.target.closest('form').checkValidity());
    console.log(values.password, values.email, values)
  }
  
  const resetForm = useCallback(
    (newValues = {username: '',
    email: '',
    password: '',
    name: ''}, 

    newErrors = {username: '',
    email: '',
    password: '',
    name: ''},
    
    newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid]
  );
  

  return (
   <div className='app'> 
   {isMobileNavOpen ? 
    <MobileNav 
    isMobileNavOpen={isMobileNavOpen} 
    handleSigninPopupClick={handleSigninPopupClick} 
    loggedin={loggedin} 
    handleLogoutClick={handleLogoutClick} /> 
    : null}

    <Header
     handleSigninPopupClick={handleSigninPopupClick}
     loggedin={loggedin}
     handleLogoutClick={handleLogoutClick}
     handleMobileNav={handleMobileNav}
     isMobileNavOpen={isMobileNavOpen}
     closeAllPopups={closeAllPopups}
     isNewsPage={savedNewsLocation}
    />
        <Switch>
          <Route exact path='/'>
            <Main loggedin={loggedin} 
            savedNewsLocation={savedNewsLocation} 
            handleSigninPopupClick={handleSigninPopupClick}
            />
            <About />
          </Route>
          <Route exact path='/saved-news'>
            <SavedNews loggedin={loggedin} savedNewsLocation={savedNewsLocation}/>
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
        handleFormChange={handleFormChange}
        values={values}
        isValid={isValid}
        errors={errors}
        resetForm={resetForm}
        />
   </div>
  );
}

export default App;
