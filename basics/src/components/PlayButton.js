import './PlayButton.css'

import React from 'react'

const PlayButton = ({massage, children}) => {

    function handelClick(){
        console.log(massage)
    }
    return (
        <button onClick={handelClick}>{children}</button>
    )
}

export default PlayButton
