import './main.css';
import getMovie from './modules/getMovies.js';
import displayMovies from './modules/displayMovies.js';
import getLikes from './modules/getLikes.js';
import like from './modules/postLike.js';
import popupDisplay from './modules/popupDisplay.js';
import addcomment from './modules/postComment.js';
import showcomment from './modules/showComment.js';
import updateCount from './modules/moviesCounter.js';
import CommentCount from './modules/CommentCount.js';

const appId = 'uHJS5mPPPDDpgRsHQqad';

const numberOfMovies = 15;
const movies = [];

for (let i = 1; i <= numberOfMovies; i += 1) {
  // eslint-disable-next-line no-await-in-loop
  const movie = await getMovie(i);
  movies.push(movie);
}

const updateLikes = async (appId) => {
  let likes = await getLikes(appId);

  if (likes.length === 0) {
    likes = [];
  } else {
    likes = JSON.parse(likes);
  }

  return likes;
};

const likes = await updateLikes(appId);

await displayMovies(movies, likes, appId);

// update count
const counter = document.getElementById('counter');
counter.innerHTML = await updateCount();

const likeBtns = document.querySelectorAll('.like-button');

const update = async (likes, index, span) => {
  const movieId = `${index + 1}`;
  likes.forEach((item) => {
    if (movieId === item.item_id) {
      span.innerHTML = `${item.likes}`;
    }
  });
};

likeBtns.forEach((item, index) => {
  item.addEventListener('click', async (e) => {
    const likesCount = e.currentTarget.parentNode.children[0];
    await like(appId, index + 1);
    const likes = await updateLikes(appId);
    const likesBox = await likesCount;
    await update(likes, index, likesBox);
  });
});

// SHOW & HIDE
const showhide = async () => {
  document.getElementById('popup-window').classList.toggle('hide');
  document.getElementById('popup-window').classList.toggle('show');
  document.querySelector('#overlay').classList.toggle('hide');
};

// comment button
const commentbtns = document.querySelectorAll('.comments');

commentbtns.forEach((commentbtn, index) => {
  commentbtn.addEventListener('click', async () => {
    const resdata = await getMovie(index + 1);
    await showhide();
    await popupDisplay(resdata);
    window.scrollTo(2, 2);
    await showcomment(appId, index + 1);
    await CommentCount();
  });
});

document.addEventListener('click', async (event) => {
  const { target } = event;

  if (target.classList.contains('close-btn')) {
    await showhide();
  }
});

// add comment

document.addEventListener('click', async (event) => {
  const { target } = event;
  if (target.classList.contains('submitbtn')) {
    event.preventDefault();
    const userName = document.getElementById('username').value;
    const comment = document.getElementById('usercomment').value;
    const movie = target.closest('#popup-window').index;
    const userComment = { userName, comment };
    await addcomment(appId, movie, userComment);
    await showcomment(appId, movie);
    await CommentCount();
    document.getElementById('username').value = '';
    document.getElementById('usercomment').value = '';
  }
});

CommentCount();
