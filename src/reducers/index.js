import { combineReducers } from "redux";

const selectPicture = (state = [], action) => {
    switch (action.type) {
        case 'SELECT-PICTURE':
            return action.payload

        default:
            return state
    }
}

const selectedPictures = (state = [], action) => {
    switch (action.type) {
        case 'SELECTED-PICTURES':
            return [action.payload, ...state]

        default:
            return state
    }
}

export default combineReducers({
    selectPicture: selectPicture,
    selectedPictures: selectedPictures
})



