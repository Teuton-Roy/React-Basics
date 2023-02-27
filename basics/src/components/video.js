import './video.css';

function Video({title}){
    // let topic = "Naruto's photo"
    let url = "http://placeimg.com/190/190/any"
    // let bg = "dark"
    return(
        <>
            {/* <h1>Video</h1> */}
            <img src={url} alt="" />
            <div className = 'dark'>
                {title}
            </div>
        </>
    );
}

export default Video;  