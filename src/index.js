import './styles/main.css';
import './images/logo1.jpg';
import './styles/main.css';
import displayMovies from './modules/displayMovies.js';
import getMovies from './modules/api.js';

const displayAllMovies = async () => {
  const display = await getMovies();
  displayMovies(display);
};

window.addEventListener('load', displayAllMovies);