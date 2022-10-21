import NetflixOriginals from '../Components/NetflixOriginals';
import TrendingNow from '../Components/TrendingNow';
import ActionMovies from '../Components/ActionMovies';
import HorrorMovies from '../Components/HorrorMovies';
import Navbar from '../Components/Navbar';
import Main from '../Components/Main';

function Home() {
  return (
    <div>
       <Navbar />
       <Main></Main>
       <NetflixOriginals></NetflixOriginals>
       <TrendingNow></TrendingNow>
       <ActionMovies></ActionMovies>
       <HorrorMovies></HorrorMovies>
    </div>
  );
}

export default Home;