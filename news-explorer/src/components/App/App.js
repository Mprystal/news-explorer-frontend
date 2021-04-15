import React, { useState, useCallback, useEffect } from 'react';
import {
  Route,
  Switch,
  Redirect,
  useLocation,
  useHistory,
} from 'react-router-dom';
import './App.css';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import Header from '../Header/Header';
import Main from '../Main/Main';
import About from '../About/About';
import Footer from '../Footer/Footer';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import MobileNav from '../MobileNav/MobileNav';
import SavedNews from '../SavedNews/SavedNews';
import ValidateForm from '../../utils/ValidateForm';
import { getCards } from '../../utils/NewsApi';
import {
  bookmarkCard,
  deleteBookmarkCard,
  getUserInfo,
  register,
  authorize,
} from '../../utils/MainApi';

function App() {
  const [loggedin, setloggedin] = useState(false);
  const [cards, setCards] = useState([]);
  const [currentUser, setCurrentUser] = useState({});
  const [isSigninPopupOpen, setIsSigninPopupOpen] = useState(false);
  const [isSignupPopupOpen, setIsSignupPopupOpen] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const [token, setToken] = useState(() => localStorage.getItem('jwt'));
  const [isLoading, setIsLoading] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const [isServerError, setIsServerError] = useState(false);
  const [searchRequest, setSearchRequest] = useState('');
  const [numCardsShown, setNumCardsShown] = useState(3);
  const [savedCards, setSavedCards] = useState([]);
  const [isSignupSuccessOpen, setIsSignupSuccessOpen] = useState(false);
  const [values, setValues] = useState({
    username: '',
    email: '',
    password: '',
    name: '',
  });
  const [errors, setErrors] = useState({
    username: '',
    email: '',
    password: '',
    name: '',
  });
  const location = useLocation();
  const savedNewsLocation = location.pathname === '/saved-news';
  const history = useHistory();

  useEffect(() => {
    if (token) {
      getUserInfo(token)
        .then(data => {
          if (data) {
            setloggedin(true);
            setCurrentUser({ email: data.email, name: data.name });
          }
        })
        .catch(err => console.log(err));
    } else {
      setloggedin(false);
    }
  }, [token]);

  function handleSearchFormSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    setIsServerError(false);
    if (searchRequest.length === 0) {
      setIsLoading(false);
      setNotFound(true);
      return;
    }
    getCards(searchRequest)
      .then(data => {
        if (data.length === 0) {
          setNotFound(true);
        }
        data.forEach(article => {
          article.keyword = searchRequest;
          article.source = article.source.name;
        });
        setNumCardsShown(3);
        setCards(data);
      })
      .catch(err => {
        setIsServerError(true);
        console.log(err);
      })
      .finally(() => setIsLoading(false));
  }

  function bookmarkArticleClick(card) {
    if (!loggedin) {
      return handleSigninPopupClick();
    }
    if (!savedNewsLocation && loggedin) {
      if (!card.isSaved) {
        bookmarkCard(card, token).then(data => {
          data.isSaved = true;
          console.log(data, 'data');
          console.log(savedCards, 'saved');
          const newSavedCards = [...savedCards, data];
          console.log(newSavedCards, 'newSaved');
          setSavedCards(newSavedCards);
        });
      }

      return;
    }
    if (savedNewsLocation) {
      return handleDeleteClick();
    }
  }

  function handleDeleteClick() {
    // deleteBookmarkCard()
    console.log('deltete');
  }

  function handleSignupSubmit(e) {
    e.preventDefault();
    resetForm();
    register(values.email, values.password, values.username)
      .then(() => {
        setIsSignupSuccessOpen(true);
        setIsSigninPopupOpen(false);
        setIsSignupPopupOpen(false);
      })
      .catch(err => console.log(err));
  }

  function handleLoginSubmit(e) {
    e.preventDefault();
    authorize(values.email, values.password)
      .then(data => {
        if (data && data.token) {
          setToken(data.token);
          localStorage.setItem('jwt', data.token);
          setCurrentUser({ email: values.email, name: values.username });
          setloggedin(true);
        }
      })
      .then(() => {
        resetForm();
        closeAllPopups();
      })
      .catch(err => console.log(err));
  }

  function handleLogoutClick() {
    localStorage.removeItem('jwt');
    setToken(() => localStorage.getItem('jwt'));
    setloggedin(false);
    history.push('/');
  }

  function handleSigninPopupClick() {
    setIsSigninPopupOpen(true);
  }

  function closeAllPopups() {
    setIsSigninPopupOpen(false);
    setIsSignupPopupOpen(false);
    setIsMobileNavOpen(false);
    setIsSignupSuccessOpen(false);
    resetForm();
  }

  function handleFormSwitchClick() {
    if (isSigninPopupOpen) {
      setIsSignupPopupOpen(true);
      setIsSigninPopupOpen(false);
    } else if (isSignupPopupOpen) {
      setIsSigninPopupOpen(true);
      setIsSignupPopupOpen(false);
    } else if (isSignupSuccessOpen) {
      setIsSignupSuccessOpen(false);
      setIsSigninPopupOpen(true);
    }
  }

  function handleSearchChange(e) {
    setSearchRequest(e.target.value);
  }

  function showMoreCards() {
    setNumCardsShown(numCardsShown + 3);
  }

  function handleMobileNav() {
    setIsMobileNavOpen(true);
  }

  const handleFormChange = e => {
    const { name, value } = e.target;
    const newValues = {
      ...values,
      [name]: value,
    };
    setValues(newValues);
    ValidateForm(errors, newValues, name);
    setErrors({ ...errors, [name]: errors[name] });
    setIsValid(e.target.closest('form').checkValidity());
  };

  const resetForm = useCallback(
    (
      newValues = { username: '', email: '', password: '', name: '' },
      newErrors = { username: '', email: '', password: '', name: '' },
      newIsValid = false
    ) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid]
  );

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className='app'>
        {isMobileNavOpen ? (
          <MobileNav
            isMobileNavOpen={isMobileNavOpen}
            handleSigninPopupClick={handleSigninPopupClick}
            loggedin={loggedin}
            handleLogoutClick={handleLogoutClick}
          />
        ) : null}

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
            <Main
              loggedin={loggedin}
              savedNewsLocation={savedNewsLocation}
              handleSearchChange={handleSearchChange}
              showMoreCards={showMoreCards}
              handleSearchFormSubmit={handleSearchFormSubmit}
              searchRequest={searchRequest}
              isLoading={isLoading}
              cards={cards}
              numCardsShown={numCardsShown}
              notFound={notFound}
              isServerError={isServerError}
              bookmarkArticleClick={bookmarkArticleClick}
            />
            <About />
          </Route>
          <Route exact path='/saved-news'>
            <SavedNews
              loggedin={loggedin}
              savedNewsLocation={savedNewsLocation}
              cards={cards}
              numCardsShown={numCardsShown}
            />
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
          handleSignupSubmit={handleSignupSubmit}
          isSignupSuccessOpen={isSignupSuccessOpen}
        />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
