import React from 'react'
import style from '../../styles/history.module.css'


const History = ({ img, name }) => {
    return (
        <div className={style.history}>
            <div className={style.history2} style={{ backgroundImage: `url(${img})` }}>
            </div>
            <h6>{name}</h6>
        </div>
    )
}

export default History



