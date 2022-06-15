import {Header,MovieList,MovieDetails} from './Components'

function App() {
  return (
    <div className="App d-flex flex-column">
      <Header/>
      <div className="d-flex border flex-row flex-fill">
        <MovieList/>
        <MovieDetails/>
      </div>
    </div>
  );
}

export default App;
