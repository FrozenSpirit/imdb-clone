import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import MovieList from './Components/MovieList';
import Home from './Components/Home';
import Movie from './Components/Movie';


function App() {
  return (
    <div className ='App'>
      <Router>
        <Header/>
        <Routes>
          <Route index element = {<Home />}></Route>
          <Route path='movie/:id' element = {<Movie/>}></Route>
          <Route path = 'movies/:type' element ={<MovieList />} ></Route>'
        </Routes>
      </Router>
     



    </div>
  );
}


export default App;
