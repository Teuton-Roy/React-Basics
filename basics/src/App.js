import './App.css';

function App() {

  let name = "Teuton"
  let className = "App-header"

  return (
    <div className="App">
      <div className={className}>
      {name}
      <Demo></Demo>
      </div>
    </div>
  );
}

function Demo() {
  return (
    <div className="App">
      <div className="App-header">
      Demo
      </div>
    </div>
  );
}

export default App;


