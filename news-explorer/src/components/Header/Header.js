import './Header.css';
import Navigation from '../Navigation/Navigation';
import DropDownMenu from '../../images/menumobileMenuV.svg';
import DropDownMenuBlack from '../../images/menumobileMenuBlackV.svg';
import CloseButton from '../CloseButton/CloseButton';
import SignInButton from '../SignInButton/SignInButton';

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
        <button className='header__button-mobile' onClick={handleMobileNav}>
          <img
            src={isNewsPage ? DropDownMenuBlack : DropDownMenu}
            alt='Click to open nav'
          />
        </button>
      )}
    </header>
  );
}

export default Header;
