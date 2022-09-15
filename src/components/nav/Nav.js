import React from 'react'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {BiMessageSquareDetail} from 'react-icons/bi'
function Nav() {
  return (
    <div>
      <a href='#'><AiOutlineHome/></a>
      <a href='#about'><AiOutlineUser/></a>
      <a href='#experiance'><BiBook/></a>
      <a href='#services'><RiServiceLine/></a>
      <a href='#contact'><BiMessageSquareDetail/></a>
    </div>
  )
}

export default Nav