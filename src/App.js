import './App.css';
import PhotoGallery from './PhotoGallery';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello, React!!!</h1>
        <PhotoGallery />
      </header>
    </div>
  );
}

export default App;



/*

To use an Emmet shortcut:
- type what you would in a css file:
  - example: p.message
- then press the Tab key to expand into:
  - <p className="message"></p>
*/