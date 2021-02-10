import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { selectPicture, selectedPictures } from '../../actions'

const CameraPhotos2 = (props) => {
    // console.log(props);
    const [rasm, setRasm] = useState([])
    useEffect(() => {
        const fetchdata = async () => {
            const response = await axios.get('https://api.unsplash.com/search/photos', {
                params: { query: 'user', per_page: 30 },
                headers: {
                    Authorization: 'Client-ID GE9QJfbWpsZxKSjafaCwAtT7cHHyOtU3qk0BOIntrAE'
                }
            })
            setRasm(response.data.results)
            // console.log(response.data)
        }
        fetchdata()
    }, [])
    return (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr" }}>
            {
                rasm.map((photo, index) => {
                    return (
                        <div
                            key={index}
                            style={{ backgroundImage: `url(${photo.urls.regular})`, width: "327px", height: "327px", backgroundSize: "cover" }}
                            onClick={() => props.selectPicture(photo)}>
                        </div>
                    )
                })
            }
        </div>
    )
}




export default connect(null, { selectPicture, selectedPictures })(CameraPhotos2)
