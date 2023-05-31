import './styles/main.css';
import './images/logo1.jpg';
import displayMovies from './modules/displayMovies.js';
import getMovies from './modules/api.js';
import { getLikes } from './modules/showLikes.js';
import addLikes from './modules/addLikes.js';

const addEvents = () => {
  const likeIcons = document.querySelectorAll('.fa-heart');
  likeIcons.forEach((likeIcon) => {
    likeIcon.addEventListener('click', () => {
      if (likeIcon.classList.contains('fa-solid', 'fa-heart-half')) {
        return;
      }
      addLikes(likeIcon.dataset.id);
      likeIcon.classList.add('fa-sharp', 'fa-solid', 'fa-heart-half');
    });
  });
};

const displayAllMovies = async () => {
  const display = await getMovies();
  displayMovies(display);
  addEvents();
  getLikes();
};

window.addEventListener('load', displayAllMovies);
