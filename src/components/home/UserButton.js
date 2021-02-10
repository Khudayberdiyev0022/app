import React from 'react'



const UserButton = () => {
    return (
        <div style={{ width: "50%", display: "flex", justifyContent: "space-around", margin: "auto" }}>

            <div className="ui animated fade button ui inverted secondary button" tabIndex="0">
                <div className="visible content">Редактировать</div>
                <div className="hidden content">
                    Edit
  </div>
            </div>

            <div className="ui animated fade button ui inverted secondary button" tabIndex="0">
                <div className="visible content">Промоакции</div>
                <div className="hidden content">
                    Promotions
  </div>
            </div>
            <div className="ui animated fade button ui inverted secondary button" tabIndex="0">
                <div className="visible content">Статистика</div>
                <div className="hidden content">
                    Statistics
  </div>
            </div>
        </div>

    )
}

export default UserButton
