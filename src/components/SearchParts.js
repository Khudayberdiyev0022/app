import React, { useState } from 'react'
import { FiSearch } from 'react-icons/fi'
import { ImQrcode } from 'react-icons/im'
import style from '../styles/searchParts.module.css'
// import SearchImg from './home/SearchImg'

const SearchParts = ({SearchByName, videoSearch}) => {
   const [input, setInput] = useState("")
   const eventHandler = (e) => {
       e.preventDefault()
       SearchByName(input)
       videoSearch(input)
       setInput("")
    console.log(input);
   }
    return (
        <div className={style.search_block}>
            <div className={style.search_box}>
                    <FiSearch />
                    <form onSubmit={eventHandler}>
                    <input 
                    type="text" 
                    placeholder="Search..." 
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    />
                    </form>
                   
                </div>
                <div className={style.search_box2}>
                    <ImQrcode />
                </div>
            </div>

        
    )
}

export default SearchParts
