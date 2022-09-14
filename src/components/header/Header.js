import React from 'react'
import './Header.css'
import CTA from './CTA'

function Header() {
  return (
    <header>
      <div className='container header__container'>
        <h5>hello i'm</h5>
        <h1>hello i'm</h1>
        <h5 className='text-light'>front developer</h5>
        <CTA/>
      </div>
    </header>
  )
}

export default Header