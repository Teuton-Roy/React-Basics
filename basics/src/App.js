
import Video from './components/video'
import './App.css';

function App() {
  return (
    <div className='App'>
      <div> 
        <Video channel="teuton.h" views="10K" time="1 year age" title="React.Js bootcamp"></Video>
        <Video channel="teuton.h" views="100K" time="3 weeks age" title="Node.Js bootcamp"></Video>
        <Video channel="teuton.h" views="25K" time="1 weeks age" title="MongoDB bootcamp"></Video>
      </div>
    </div>

  );
}

export default App;

