import React from 'react'
import { Link } from 'react-router-dom';
import LogoBlue83 from '../../assets/images/logo8x3white.svg';

function LinlForHomePage() {
  return (
    <div>
      <Link to='/' className='linl-btn'>
        <img src={LogoBlue83} alt='logo' className='logo'></img>
      </Link>
    </div>
  )
}

export default LinlForHomePage