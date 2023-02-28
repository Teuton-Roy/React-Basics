import './video.css';

// function Video({title, bgColor}){
//     // let topic = "Naruto's photo"
//     let url = "http://placeimg.com/190/190/any"
//     let bg = "dark"
//     return(
//         <>
//             {/* <h1>Video</h1> */}
//             <img src={url} alt="" />
//             <div className={bg} style = {{backgroundColor:bgColor}} >
//                 {title}
//             </div>
//         </>
//     );
// }

function Video({title, channel, views, time, profileImgSrc}){
    return(
        <>
        <div className="container">
            <div className="pic">
                <img src="http://placeimg.com/180/100/any" alt="img" />
            </div>
            <div className="title">
                {title}
            </div>
            <div className="channel">
            <img src={profileImgSrc} alt="" srcset="" />{channel}
            </div>
            <div className="view">
                {views} views <span>.</span> {time}
            </div>
        </div>
        </>
    );
}

export default Video;  