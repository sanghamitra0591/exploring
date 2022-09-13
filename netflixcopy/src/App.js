import './App.css';
import NetflixOriginals from './NetflixOriginals';
import TrendingNow from './TrendingNow';
import ActionMovies from './ActionMovies';
import HorrorMovies from './HorrorMovies';
import Navbar from './Navbar';
import Main from './Main';

function App() {
  return (
    <div className="App">
       <Navbar></Navbar>
       <Main></Main>
       <NetflixOriginals></NetflixOriginals>
       <TrendingNow></TrendingNow>
       <ActionMovies></ActionMovies>
       <HorrorMovies></HorrorMovies>
    </div>
  );
}

export default App;
