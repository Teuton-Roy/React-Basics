import './PlayButton.css'

import React from 'react'

const PlayButton = ({massage, name}) => {

    function handelClick(){
        console.log(massage)
    }
    return (
        <button onClick={handelClick}>{name}</button>
    )
}

export default PlayButton
