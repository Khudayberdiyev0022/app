import React from 'react'
import { Link } from 'react-router-dom'
import {
    AiOutlineHome,
    AiOutlineHeart,
    AiOutlineUser,
    AiOutlineCamera,
    AiOutlineSearch
} from 'react-icons/ai'
import style from './styles/navbar.module.css'


const Navbar = () => {
    return (
        <div className={style.navbar}>
            <Link to="/"> <AiOutlineHome /> </Link>
            <Link to="/search"> <AiOutlineSearch /> </Link>
            <Link to="/camera" > <AiOutlineCamera /> </Link>
            <Link to="/heart"> <AiOutlineHeart /> </Link>
            <Link to="user"> <AiOutlineUser /> </Link>
        </div>
    )
}

export default Navbar
