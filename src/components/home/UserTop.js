import React from 'react'
import img_1 from '../../assets/1.jpg'

const UserTop = () => {
    return (
        <div style={{display: "flex",  alignItems: "center", width: "80%", margin: "auto"}}>
            <div style={{ backgroundImage: `url(${img_1})`, width: "150px", height: "150px", borderRadius: "50%", backgroundSize: "cover", margin: "1rem" }}>
            </div>
            <div style={{display: "flex",  justifyContent: "space-between", width: "50%", textAlign: "center", margin: "auto"}}>
                <div>
                    <h2>24</h2>
                    <p>Публикация</p>
                    
                </div>
                <div>
                    <h2>506</h2>
                    <p>Подписчики</p>
                </div>
                <div>
                    <h2>203</h2>
                    <p>Подписки</p>
                </div>
            </div>
        </div>
    )
}

export default UserTop
