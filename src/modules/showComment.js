import getComments from './getcomments.js';

const showComment = async (appId, index) => {
  const comments = await getComments(appId, index);
  const list = document.querySelector('.commentlist');

  if (comments.length > 0) {
    list.innerHTML = '';
    comments.forEach((comment) => {
      const commentEl = document.createElement('li');
      commentEl.classList.add('commentli');
      commentEl.innerHTML = `${comment.creation_date} :: ${comment.username} : ${comment.comment} `;
      list.appendChild(commentEl);
    });
  }
};

export default showComment;