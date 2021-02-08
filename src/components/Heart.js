import axios from 'axios'
import React, { useEffect, useState } from 'react'
import HeartCard from './home/HeartCard'

const Heart = () => {
    const [yurak, setYurak] = useState([])

    useEffect(() => {
        const fetchdata = async () => {
            const response = await axios.get('https://api.unsplash.com/photos', {
                params: { query: 'user', per_page: 300 },
                headers: {
                    Authorization: 'Client-ID GE9QJfbWpsZxKSjafaCwAtT7cHHyOtU3qk0BOIntrAE'
                }
            })
            setYurak(response.data)
            // console.log(response.data)
        }
        fetchdata()
    }, [])
    console.log(yurak);
    return (
        <div>
            <HeartCard yurak={yurak} />
        </div>
    )
    }

export default Heart
