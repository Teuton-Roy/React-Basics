
import Video from './components/video'
import './App.css';
import videos from './components/Data'

function App() {

  return (
    <div className='App'>
      <div>
        {
          videos.map(video=>
            <Video 
            key={video.id}
            subscrribers={video.subscribers}
            profileImgSrc={video.profileImgSrc}
            channel={video.channel}
            views={video.views}
            time={video.time}
            title={video.title}
            verified = {video.verified}
            id = {video.id}
            >
            </Video>
          )
        }
      </div>
    </div>

  );
}
export default App;

