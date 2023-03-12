import './PlayButton.css'

import React from 'react'

const PlayButton = () => {

    function handelClick(){
        console.log('play')
    }
    return (
        <button onClick={handelClick}>Play</button>
    )
}

export default PlayButton
