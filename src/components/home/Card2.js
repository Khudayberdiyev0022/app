import React, { useState } from 'react'
import style from '../../styles/home2.module.css'
import {
    BsHeart,
    BsChat,
    BsBookmark,
    BsBookmarkFill,
    BsThreeDotsVertical,
    BsHeartFill
} from 'react-icons/bs'
import { GrSend } from 'react-icons/gr'


const Card2 = ({ img, likes, username }) => {
    const [like, setLike] = useState(true)
    const [bookmark, setBookmark] = useState(true)

    return (
        <div>
            <div className={style.home2}>
                <div className={style.block}>
                    <div className={style.box} style={{ backgroundImage: `url(${img})` }}>
                    </div>
                    <p>{username}</p>
                </div>
                <BsThreeDotsVertical />
            </div>
            <div className={style.boxx} style={{
                backgroundImage: `url(${img})`
            }}></div>
            <div className={style.box3}>
                <div>
                    {
                        like
                            ? <BsHeart onClick={() => setLike(!like)} />
                            : <BsHeartFill onClick={() => setLike(!like)} />
                    }
                    <BsChat />
                    <GrSend />
                </div>
                {
                    bookmark
                        ? <BsBookmark onClick={() => setBookmark(!bookmark)} />
                        : <BsBookmarkFill onClick={() => setBookmark(!bookmark)} />
                }
            </div>
            <div>
                <h5 className={style.likes}>Likes: {like ? likes : likes + 1}</h5>
                <p className={style.paragraf}>Adipisicing sit labore duis aliquip proident nostrud occaecat do consequat enim tempor consectetur ex. Nisi aliqua dolor quis laborum sunt consectetur. Amet exercitation adipisicing sit labore enim duis pariatur mollit aliqua cillum officia.Eu nulla mollit  dolor velit Lorem elit occaecat excepteur. Eu aliquip eiusmod officia ullamco Lorem commodo veniam ullamco nostrud aliquip amet mollit deserunt pariatur. Nisi aliqua dolor quis laborum sunt consectetur. Amet exercitation adipisicing sit labore enim duis pariatur mollit aliqua cillum officia. Eu nulla mollit dolor velit Lorem elit occaecat excepteur. Eu aliquip eiusmod officia ullamco Lorem commodo veniam ullamco nostrud aliquip amet mollit deserunt pariatur.</p>
            </div>
        </div>
    )
}

export default Card2

