import './PlayButton.css'

import React from 'react'

const PlayButton = ({ children, onPause, onPlay}) => {

    let playing = false //don't use this approch//
    function handelClick(){
        
        if(playing) onPause()
        else onPlay()

        playing =!playing;
    }

    return (
        <button onClick={handelClick}>{children}: {playing ? '>' : '||'}</button>
    )
}

export default PlayButton
