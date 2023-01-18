import Cards from './components/Cards'

function App() {
  return (
    <div className="App">
      <h1>ALPHABET MEMORY</h1>
      <Cards />
      <button className="buttons" onClick={()=> window.location.reload(false)}><b>Restart Game</b></button>
    </div>
  );
}

export default App;