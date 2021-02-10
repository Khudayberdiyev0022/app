import React from 'react'
import img_1 from '../../assets/1.jpg'
import { connect } from 'react-redux'
import { selectedPictures } from '../../actions'

const CameraPhotos = (props) => {
    const style = {
        width: "100%",
        height: "60vh",
        backgroundImage: `url(${props.picture.urls ? props.picture.urls.regular : img_1})`,
        backgroundPosition: "center",
        backgroundSize: "cover"
    }




    return (
        <div onClick={() => props.selectedPictures(props.picture)} style={style}>
        </div>
    )
}
const mapStateToProps = (state) => {
    console.log(state);
    return {
        picture: state.selectPicture
    }
}

export default connect(mapStateToProps, { selectedPictures })(CameraPhotos)
