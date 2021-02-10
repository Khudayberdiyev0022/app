export const selectPicture = (picture) => {
    return {
        type: 'SELECT-PICTURE',
        payload: picture
    }
}

export const selectedPictures = (picture) => {
    return {
        type: 'SELECTED-PICTURES',
        payload: picture
    }
}