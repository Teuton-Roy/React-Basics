
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

            <PlayButton  
            onPlay={() => console.log('Playing-bitch', video.title)} 
            onPause={() => alert('Paused-bitch', video.title)}>
              {video.title}
            </PlayButton>

            </Video>
          )
        }
        <div style={{clear: 'both'}}>
          {/* <PlayButton  onPlay={() => console.log('Play-bitch')} onPause={() => alert('Pause-bitch')}>Play</PlayButton> */}
          {/* <PlayButton  onPause={() => alert('Pause-bitch')}>Pause</PlayButton> */}
        </div>
      </div>
    </div>

  );
}

export default App;