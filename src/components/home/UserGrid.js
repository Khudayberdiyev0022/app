import React, { useState } from 'react'
import { BsGrid3X3 } from 'react-icons/bs'
import { BiUserPin } from 'react-icons/bi'
import style from '../../styles/userGrid.module.css'
import { connect } from 'react-redux'
// import img_2 from '../../assets/2.jpg'

const UserGrid = (props) => {
    const [click, setClick] = useState(false)

    const renderPhoto = (props) => {
        // console.log(props);
        return (
            <div className={style.grid}>
                {
                    props.selectedPictures.map((image, index) => {
                        return (
                            <div
                            className={style.photos}
                                key={index}
                                style={{ backgroundImage: `url(${image.urls.regular})`}}>

                            </div>
                        )
                    })
                }
            </div>
        )
    }


    return (
        <div className={style.main}>
            <div className={style.buttons}>
                <div
                    onClick={() => setClick(false)}
                    className={!click ? style.clicked : ''}
                >
                    <BsGrid3X3 />
                </div>
                <div
                    className={click ? style.clicked : '' }
                    onClick={() => setClick(true)}
                >
                    <BiUserPin />
                </div>
            </div>
            {!click && renderPhoto(props)}
        </div>
    )
}
const mapStateToProps = state => {
    // console.log(state)
    return {
        selectedPictures: state.selectedPictures
    }
}


export default connect(mapStateToProps)(UserGrid)
