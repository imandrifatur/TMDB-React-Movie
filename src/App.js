import MovieList from './Components/Movies';
import './App.css';
import React from 'react';
import ColorSchemesExample from './Components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">
      <ColorSchemesExample />
      
    <MovieList />
    </div>
  );
}

export default App;
