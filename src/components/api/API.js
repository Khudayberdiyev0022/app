import axios from 'axios'

export default axios.create({
    baseURL: `https://www.googleapis.com/youtube/v3`,
    params: {
        part: "snippet",
        max_result: 5,
        key: 'AIzaSyBdKH4dxuAoh4Qi7PHUkBQQHvlNs6I5VgM'
    }
})