import React from 'react'
import style from '../../styles/searchCards.module.css'
import '../../styles/youtube.css'

const SearchCards = ({ rasm, videos }) => {
    return (
        <div className={style.searchCardsTop}>
            {
                rasm.map((photo, index) => {
                    return (
                        <div key={index} className={style.searchCards} style={{ backgroundImage: `url(${photo.urls.regular})` }}></div>
                    )
                })
            }
            {
                videos.map((video, index) => {
                    console.log(video);
                    return (
                        <div key={index} className={`card${index}`}>
                            <iframe title={index} width="654px" height="654px" src={`https://www.youtube.com/embed/${video.id.videoId}`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default SearchCards
