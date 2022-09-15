/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import './Header.css'
import CTA from './CTA'
import ME from '../../assets/men.jpg'
import HeaderSoctioal from './HeaderSoctioal'

function Header() {
  return (
    <header>
      <div className='container header__container'>
        <h5>hello i'm</h5>
        <h1>hello i'm</h1>
        <h5 className='text-light'>front developer</h5>
        <CTA/>
        <HeaderSoctioal/>
        <div className='me'>
          <img src={ME} alt='me.image'/>
        </div>

        <a href='#contact' className='scroll__down'> scroll dwon</a>
      </div>
    </header>
  )
}

export default Header