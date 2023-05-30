import './styles/main.css';
import './images/logo1.jpg';
import displayMovies from './modules/displayMovies.js';
import getMovies from './modules/api.js';

const displayAllMovies = async () => {
  const display = await getMovies();
  displayMovies(display);
};

window.addEventListener('load', displayAllMovies);
const parentElem = document.getElementById('liContainer');
parentElem.addEventListener('click', (event) => {
  if (event.target.matches('.btn')) {
    const newDiv = document.createElement('div');
    newDiv.className = "mainContainer";
    newDiv.innerHTML = `
    <div class="mainContainer1">

    <div class="closeBtd flex">
        <img src="./modules/close_icon.png" alt="main image">
    </div>

    <div class="movieDetails flex">
        <div class="imgDiv">
           <img src="./modules/rsz_popup_mobile_thumbnail.png" alt="main image">
        </div>
        <h2>Movie Name</h2>
        <div class="movieInfo flex">
            <div class="otherInfo flex">
                <span>Language</span>
                <span>Genres</span>
            </div>
            <div class="otherInfo flex">
                <span>Episode Length</span>
                <span>Genres</span>
            </div>
        </div>
        <div class="comments flex">
            <h3>Comments</h3>
            <div class="commentsDisplay flex">
                <span>Nahid : Love this movie</span>
            </div>
        </div>
        <div class="addComment flex">
            <h3>Add a comment</h3>
            <div class="commentField flex">
                <input type="text" class="name" placeholder="Your name">
                <textarea name="" id="" cols="30" rows="5" placeholder="Your insights"></textarea>
                <button>Comment</button>
            </div>
        </div>
    </div>
</div>
    `
    document.body.appendChild(newDiv);
  }
});
// console.log(parentElem);