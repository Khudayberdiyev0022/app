import React from 'react'
import {FaFacebookMessenger} from 'react-icons/fa'
import style from './styles/navbarTop.module.css'

const NavbarTop = () => {
    return (
        <div className={style.navbar_top}>
             <h3>Instagram</h3>
             <FaFacebookMessenger />

        </div>
    )
}

export default NavbarTop
