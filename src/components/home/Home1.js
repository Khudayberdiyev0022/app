import React, { useState, useEffect, Fragment } from 'react'
import axios from 'axios'
import History from './History'


const Home1 = () => {
    const [photos, setPhotos] = useState([])
    useEffect(() => {
        const fetchdata = async () => {
            const response = await axios.get('https://api.unsplash.com/photos', {
                params: { query: 'user' },
                headers: {
                    Authorization: 'Client-ID GE9QJfbWpsZxKSjafaCwAtT7cHHyOtU3qk0BOIntrAE'
                }
            })
            setPhotos(response.data)
        }
        fetchdata()
    }, [])
    console.log(photos);



    return (
        <div>
            {
                photos.map((photo, index) => {
                    return (
                        <Fragment key={index}>
                            <History img={photo.urls.regular} name={photo.user.instagram_username} />
                        </Fragment>
                    )
                })


            }

        </div>
    )
}

export default Home1
