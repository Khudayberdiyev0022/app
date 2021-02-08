import axios from 'axios'
import React, { useEffect, useState } from 'react'
import NavbarTop from '../NavbarTop'
import Home1 from './home/Home1'
import Home2 from './home/Home2'

const Home = () => {
    const [rasm, setRasm] = useState([])
    useEffect(() => {
        const fetchdata = async () => {
            const response = await axios.get('https://api.unsplash.com/photos', {
                params: { query: 'user', per_page: 300 },
                headers: {
                    Authorization: 'Client-ID GE9QJfbWpsZxKSjafaCwAtT7cHHyOtU3qk0BOIntrAE'
                }
            })
            setRasm(response.data)
            // console.log(response.data)
        }
        fetchdata()
    }, [])
    console.log();

    return (
        <div>
            <NavbarTop />
           <Home1 photos={rasm}/>
           <Home2 rasmlar={rasm}/>
        </div>
    )
}

export default Home
