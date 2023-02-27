
function Video(){
    let topic = "Naruto's photo"
    let url = "http://placeimg.com/190/190/any"
    let bg = "dark"
    return(
        <>
            {/* <h1>Video</h1> */}
            <img src={url} alt="" />
            <div className = {bg}>
                {topic}
            </div>
        </>
    );
}

export default Video;  