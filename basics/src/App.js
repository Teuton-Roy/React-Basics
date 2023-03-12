
import Video from './components/video'
import './App.css';
import videos from './components/Data'
import PlayButton from './components/PlayButton';

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
        <div style={{clear: 'both'}}>
          <PlayButton massage='play-bitch'>Play</PlayButton>
          <PlayButton massage='pause-bitch'>Pause</PlayButton>
        </div>
      </div>
    </div>

  );
}

export default App;