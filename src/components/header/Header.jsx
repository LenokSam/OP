import React from 'react'
import './header.css'

function Header() {
  return (
    <div className='header'>
        <div className='header__title'> Расчет системы подогрева открытой поверхности </div>
    </div>
  )
}

export default React.memo(Header)