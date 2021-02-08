import axios from 'axios'
import React, { useState } from 'react'
import SearchCards from './home/SearchCards'
import SearchParts from './SearchParts'
import Youtube from './api/API'



const Search = () => {
    const [rasm, setRasm] = useState([])
    const [videos, setVideos] = useState([])

    const videoSearch = async SearchByName => {
        const response = await Youtube.get('/search', {
            params:{
                q: SearchByName  
            }   
        })
        setVideos(response.data.items)
    }
 
    const SearchByName = (e) => {
        const fetchdata = async () => {
            const response = await axios.get('https://api.unsplash.com/search/photos', {
                params: { query: e, per_page: 30 },
                headers: {
                    Authorization: 'Client-ID GE9QJfbWpsZxKSjafaCwAtT7cHHyOtU3qk0BOIntrAE'
                }
            })
            setRasm(response.data.results)
            // console.log(response.data)
        }
        fetchdata()
    }
    console.log(videos);
    return (
        <div>
            <SearchParts SearchByName={SearchByName} videoSearch={videoSearch}/>
           <SearchCards rasm={rasm} videos={videos}/>
        </div>
    )
}

export default Search
