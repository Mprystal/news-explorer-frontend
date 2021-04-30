import './Header.css';
import Navigation from '../Navigation/Navigation';
import CloseButton from '../CloseButton/CloseButton';
import SignInButton from '../SignInButton/SignInButton';
import { ReactComponent as MenuMobile } from '../../images/menumobileMenuV.svg';

function Header({
  handleSigninPopupClick,
  loggedin,
  handleLogoutClick,
  handleMobileNav,
  isMobileNavOpen,
  closeAllPopups,
  isNewsPage,
}) {
  return (
    <header
      className='header'
      style={{ borderBottom: isNewsPage ? '1px solid #D1D2D6' : null }}
    >
      <h4
        className='header__title'
        style={{
          color:
            isNewsPage && !isMobileNavOpen
              ? 'black'
              : isNewsPage && isMobileNavOpen
              ? 'white'
              : null,
        }}
      >
        NewsExplorer
      </h4>
      <div className='header__container'>
        {isMobileNavOpen ? null : (
          <Navigation loggedin={loggedin} isNewsPage={isNewsPage} />
        )}

        <SignInButton
          handleSigninPopupClick={handleSigninPopupClick}
          handleLogoutClick={handleLogoutClick}
          loggedin={loggedin}
          isNewsPage={isNewsPage}
        />
      </div>
      {isMobileNavOpen ? (
        <CloseButton
          isMobileNavOpen={isMobileNavOpen}
          closeAllPopups={closeAllPopups}
        />
      ) : (
        <button
          className={`header__button-mobile ${
            isNewsPage && 'header__button-mobile_black'
          }`}
          onClick={handleMobileNav}
          aria-label='Open menu'
        >
          <MenuMobile />
        </button>
      )}
    </header>
  );
}

export default Header;
