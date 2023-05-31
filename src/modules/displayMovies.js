const cardsContainer = document.querySelector('.cards-display-section');

const displayMovies = async (shows) => {
  for (let i = 0; i < 20 && i < shows.length; i += 1) {
    const show = shows[i];

    cardsContainer.innerHTML += `
        <li id="movie-${show.id}" class="movie-item">
          <img src=${show.image.medium} alt="movie-image" class="movie-image" />
          <div class="likes-container">
            <h4 class="movie-title">${show.name}</h4>
            <div class="icon">
            <i class="fa-sharp fa-regular fa-heart" data-id=${show.id}></i>
            <p data-id="${show.id}"><span class="like-rates"></span></p>
            </div>
          </div>
          <div>
            <button class="btn" id="${show.id}">Comments</button>
          </div>
        </li>
      `;
  }
};

export default displayMovies;
