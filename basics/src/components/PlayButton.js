import './PlayButton.css'

import React from 'react'

const PlayButton = ({massage, children, onClick}) => {

    function handelClick(){
        onClick()
    }

    return (
        <button onClick={handelClick}>{children}</button>
    )
}

export default PlayButton
