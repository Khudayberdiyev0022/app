import React from 'react'
import style from '../../styles/heartCard.module.css'
import { AiFillLike } from 'react-icons/ai'

const HeartCard = ({ yurak }) => {
    // console.log(yurak);
    return (
        <div className={style.heartCard}>
            <h2 className={style.h2}>Activity</h2>
            <div className={style.block}>
                {
                    yurak.map((hearts, index) => {
                        return (
                            <div key={index} className={style.heartBlock}>
                                <div className={style.heartBox}
                                    style={{ backgroundImage: `url(${hearts.user.profile_image.large})` }}>
                                </div>
                                <div style={{ width: "70%" }}>
                                    <h3>{hearts.user.username} <small>is following you</small> </h3>
                                    <h2><AiFillLike /> {hearts.likes} </h2>
                                </div>

                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default HeartCard
