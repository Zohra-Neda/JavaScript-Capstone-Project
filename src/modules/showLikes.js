async function showLikes(likes) {
  likes.forEach((like) => {
    const elementId = `movie-${like.item_id}`;
    const displayLike = document.getElementById(elementId);
    if (displayLike) {
      const likeRates = displayLike.querySelector('.like-rates');
      likeRates.textContent = like.likes.toString();
    }
  });
}

export const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/uHJS5mPPPDDpgRsHQqad/likes/';
const getLikes = async () => {
  const response = await fetch(url);
  let likes = [];
  likes = await response.json();
  showLikes(likes);
};

export { showLikes, getLikes };