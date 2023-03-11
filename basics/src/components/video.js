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

function Video({title, id, channel, views, time, profileImgSrc, subscrribers, verified}){


    //One Method: using if-else{}//
    // let channelJSX
    // if(verified){
    //    channelJSX= <div className="channel">
    //     <img src={profileImgSrc} alt="" srcset="" />{channel} <br/>{subscrribers}
    //     </div>
    // }else{
    //     channelJSX = <div className="channel">
    //     <img src={profileImgSrc} alt="" srcset="" />{channel} <br/>{subscrribers}
    //     </div>
    // }

    return(
        <>
        <div className="container">
            <div className="pic">
                <img src={`https://picsum.photos/id/${id}/160/90`} alt="img" />
            </div>
            <div className="title">
                {title}
            </div>
            
            {/* Another methods: using ternarry ?:}*/}
            {verified ? 
            <div className="channel">
                <img src={profileImgSrc} alt="" srcset="" />{channel}✅ <br/>{subscrribers}
             </div> : 
             <div className="channel">
                <img src={profileImgSrc} alt="" srcset="" />{channel} <br/>{subscrribers}
            </div> 
            }
            

            {/* <div className="channel">
                <img src={profileImgSrc} alt="" srcset="" />{channel} {verified && '✅'} <br/>{subscrribers}
             </div> 
             {verified && '✅'}: using this we can also conditionally randering
             */}



            {/* <div className="subscribers">
                {subscrribers}
            </div> */}
            <div className="view">
                {views} views <span>.</span> {time}
            </div>
        </div>
        </>
    );
}
export default Video;  