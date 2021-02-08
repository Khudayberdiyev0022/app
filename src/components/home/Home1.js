import React, { Fragment } from 'react'
import History from './History'
import style from '../../styles/home1.module.css'
// import Home2 from './Home2'


const Home1 = ({photos}) => {
   


    return (
        <div className={style.home1}>
            {
                photos.map((photo, index) => {
                    return (
                        <Fragment key={index}>
                            <History img={photo.urls.regular} name={photo.user.first_name} />
                        </Fragment>
                    )
                })


            }

        </div>
    )
}

export default Home1
