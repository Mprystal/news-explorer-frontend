import React from 'react';
import './NotFound.css';
import Sadguy from '../../images/not-found_v1sadguy.png';

function NotFound() {
  return (
    <>
      <img src={Sadguy} alt='sad person' />
      <h3 className='notfound__title'>Nothing found</h3>
    </>
  );
}

export default NotFound;
