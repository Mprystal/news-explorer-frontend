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
  getArticles,
} from '../../utils/MainApi';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import notFoundImage from '../../images/noImageFound.svg';

function App() {
  const [loggedin, setLoggedin] = useState(false);
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
  const [sameUserError, setSameUserError] = useState(false);
  const [wrongEmailOrPasswordError, setWrongEmailOrPasswordError] = useState(
    false,
  );
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
        .then((data) => {
          if (data) {
            setLoggedin(true);
            setCurrentUser({
              email: data.email,
              name: data.name,
            });
          }
        })
        .catch((err) => console.log(err));
    } else {
      setLoggedin(false);
    }
  }, [token]);

  useEffect(() => {
    if (localStorage.getItem('searchResults')) {
      setCards(JSON.parse(localStorage.getItem('searchResults')));
    }
    if (localStorage.getItem('savedCards')) {
      setSavedCards(JSON.parse(localStorage.getItem('savedCards')));
    }
  }, []);

  useEffect(() => {
    if (loggedin) {
      getArticles(token)
        .then((data) => {
          setSavedCards(data);
          localStorage.setItem('savedCards', JSON.stringify(data));
        })
        .catch((err) => console.log(err));
    }
  }, [loggedin, token]);

  function sameArticleKeyCheck(article, savedCard) {
    const articleKeys = [
      'keyword',
      'date',
      'image',
      'link',
      'source',
      'text',
      'title',
    ];
    return articleKeys.every((key) => article[key] === savedCard[key]);
  }

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
      .then((data) => {
        if (data.length === 0) {
          setNotFound(true);
        }
        data.forEach((article) => {
          console.log(article.image);
          if (!article.image || article.image.length === 0) {
            article.image = notFoundImage;
          }
          article.keyword =
            searchRequest[0].toUpperCase() +
            searchRequest.slice(1).toLowerCase();
          article.source = article.source.name;
          if (loggedin) {
            savedCards.forEach((savedCard) => {
              if (sameArticleKeyCheck(article, savedCard)) {
                article.isSaved = true;
                article._id = savedCard._id;
              }
              return;
            });
          }
        });
        return data;
      })
      .then((updatedCards) => {
        setNumCardsShown(3);
        setCards(updatedCards);
        localStorage.setItem('searchResults', JSON.stringify(updatedCards));
      })
      .catch((err) => {
        setIsServerError(true);
        console.log(err, 'error');
      })
      .finally(() => setIsLoading(false));
  }

  function bookmarkArticleClick(card) {
    if (!loggedin) {
      return handleSigninPopupClick();
    }
    if (!savedNewsLocation && loggedin) {
      if (!card.isSaved) {
        bookmarkCard(card, token)
          .then((cardData) => {
            cardData.isSaved = true;
            const newCards = cards.map((c) => (c === card ? cardData : c));
            const newSavedCards = [...savedCards, cardData];
            setSavedCards(newSavedCards);
            setCards(newCards);
            localStorage.setItem('searchResults', JSON.stringify(newCards));
            localStorage.setItem('savedCards', JSON.stringify(newSavedCards));
          })
          .catch((err) => console.log(err));
      } else {
        handleDeleteClick(card);
      }

      return;
    }
    if (savedNewsLocation) {
      return handleDeleteClick(card);
    }
  }

  function handleDeleteClick(card) {
    deleteBookmarkCard(card._id, token)
      .then((res) => {
        if (res.ok) {
          card.isSaved = false;
          const newCards = cards.map((c) => (c._id === card._id ? card : c));
          const newSavedCards = savedCards.filter((c) => c._id !== card._id);
          setSavedCards(newSavedCards);
          setCards(newCards);
          localStorage.setItem('searchResults', JSON.stringify(newCards));
          localStorage.setItem('savedCards', JSON.stringify(newSavedCards));
        }
      })
      .catch((err) => console.log(err));
  }

  function handleSignupSubmit(e) {
    e.preventDefault();
    register(values.email, values.password, values.username)
      .then((res) => {
        if (res.status === 409) {
          setSameUserError(true);
          return Promise.reject(`Error! ${res.statusText}`);
        }
        if (res.ok) {
          return res.json();
        }
        Promise.reject(`Error! ${res.statusText}`);
      })
      .then(() => {
        setSameUserError(false);
        setIsSignupSuccessOpen(true);
        setIsSigninPopupOpen(false);
        setIsSignupPopupOpen(false);
        resetForm();
      })
      .catch((err) => console.log(err));
  }

  function handleLoginSubmit(e) {
    e.preventDefault();
    authorize(values.email, values.password)
      .then((res) => {
        if (res.status === 401) {
          setWrongEmailOrPasswordError(true);
          return Promise.reject(`Error! ${res.statusText}`);
        }
        if (res.ok) {
          return res.json();
        }
        Promise.reject(`Error! ${res.statusText}`);
      })
      .then((data) => {
        setWrongEmailOrPasswordError(false);
        if (data.token) {
          return data;
        }
        return;
      })
      .then((data) => {
        if (data && data.token) {
          setToken(data.token);
          localStorage.setItem('jwt', data.token);
          setCurrentUser({
            email: data.email,
            name: data.username,
          });
          setLoggedin(true);
        }
      })
      .then(() => {
        resetForm();
        closeAllPopups();
      })
      .catch((err) => console.log(err));
  }

  function handleLogoutClick() {
    localStorage.clear();
    const newCards = cards;
    newCards.forEach((c) => {
      c.isSaved = false;
    });
    setCards(newCards);
    setLoggedin(false);
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
      setSameUserError(false);
    } else if (isSignupPopupOpen) {
      setIsSigninPopupOpen(true);
      setIsSignupPopupOpen(false);
      setWrongEmailOrPasswordError(false);
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

  const handleFormChange = (e) => {
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
      newIsValid = false,
    ) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid],
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
          <ProtectedRoute
            exact
            path='/saved-news'
            loggedin={loggedin}
            savedNewsLocation={savedNewsLocation}
            cards={savedCards}
            numCardsShown={numCardsShown}
            bookmarkArticleClick={bookmarkArticleClick}
            component={SavedNews}
          />
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
          isMobileNavOpen={isMobileNavOpen}
          sameUserError={sameUserError}
          wrongEmailOrPasswordError={wrongEmailOrPasswordError}
        />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
