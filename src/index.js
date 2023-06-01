import './styles/main.css';
import './images/logo1.jpg';
import './images/close_icon.png';
import displayMovies from './modules/displayMovies.js';
import getMovies from './modules/api.js';
import { getLikes } from './modules/showLikes.js';
import addLikes from './modules/addLikes.js';
import displayComments from './modules/comments_display.js';
import { saveComments } from './modules/comnt_fetch.js';

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

// COMMENT POPUP
const shows = await getMovies();
const arr = Array.from(shows);

const parentElem = document.getElementById('liContainer');
parentElem.addEventListener('click', (event) => {
  const matcher = event.target.matches('.btn');
  const eventElem = event.target;
  const eventId = eventElem.id - 1;

  if (matcher) {
    const newDiv = document.createElement('div');
    newDiv.className = 'mainContainer';
    newDiv.innerHTML = `
    <div class="mainContainer1">

    
    <div class="movieDetails flex">
    <div class="closeBtd flex">
        <img id="closeImg" src="./images/close_icon.png" alt="main image">
    </div>
        <div class="imgDiv">
           <img src="${arr[eventId].image.medium}">
        </div>
        <h2>${arr[eventId].name}</h2>
        <div class="movieInfo flex">
            <div class="otherInfo flex">
                <span>Language: ${arr[eventId].language}</span>
                <span>Genres : ${arr[eventId].genres}</span>
            </div>
            <div class="otherInfo flex">
                <span>Episode Length : ${arr[eventId].averageRuntime}</span>
                <span>Rating : ${arr[eventId].rating.average}</span>
            </div>
        </div>
        <div class="comments flex">
            <h3>Comments</h3>
            <div id="commentsDisplay" class="commentsDisplay flex">
            </div>
        </div>
        <div class="addComment flex">
            <h3>Add a comment</h3>
            <div class="commentField flex">
                <input type="text" id='nArea${eventId + 1}' class="name" placeholder="Your name">
                <textarea name="" id='mArea${eventId + 1}' cols="30" rows="5" placeholder="Your insights"></textarea>
                <button id=${eventId + 1} class="comntBtn">Comment</button>
            </div>
        </div>
    </div>
</div>
    `;
    document.body.appendChild(newDiv);
  }
  displayComments(eventId + 1);
});

const bodyHtml = document.getElementById('liContainer');
const parent = bodyHtml.parentElement.parentElement;

parent.addEventListener('click', (event) => {
  if (event.target.matches('#closeImg')) {
    const lastCh = parent.lastChild;
    if (lastCh) {
      document.body.removeChild(lastCh);
    }
  }
});

parent.addEventListener('click', (event) => {
  if (event.target.matches('.comntBtn')) {
    const lastCh = parent.lastChild;
    const targetElem = event.target;
    const id = targetElem.getAttribute('id');

    if (lastCh) {
      const comntField = event.target.previousElementSibling;
      const nameField = comntField.previousElementSibling;
      const comntFieldValue = comntField.value;
      const nameFieldValue = nameField.value;
      saveComments(id, nameFieldValue, comntFieldValue);
      comntField.value = '';
      nameField.value = '';
      displayComments(id);
    }
  }
});
