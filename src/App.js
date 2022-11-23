import Cards from './components/Cards'

function App() {
  return (
    <div className="App">
      <h1>ALPHABET MEMORY</h1>
      <Cards />
      <div className=''>
      <button className="buttons" onClick={()=> window.location.reload(false)}><b>RESTART GAME</b></button>
      </div>
    </div>
  );
}

export default App;