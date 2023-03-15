import './PlayButton.css'

import React from 'react'

const PlayButton = ({ children, onPause, onPlay}) => {

    let playing = false
    function handelClick(){
        
        if(playing) onPause()
        else onPlay()

        playing =!playing;
    }

    return (
        <button onClick={handelClick}>{children}</button>
    )
}

export default PlayButton
