import { fetchComments, saveComments } from './comnt_fetch.js';

async function displayComments(id) {
  const allComments = await fetchComments(id).then(saveComments(id));
  const targetElem = document.getElementById('commentsDisplay');
  targetElem.innerHTML = '';
  allComments.forEach((comment) => {
    const newDiv = document.createElement('div');
    const span1 = document.createElement('span');
    const span2 = document.createElement('span');
    const span3 = document.createElement('span');
    span1.innerText = `${comment.creation_date} : `;
    span2.innerText = `${comment.username} : `;
    span3.innerText = comment.comment;
    newDiv.appendChild(span1);
    newDiv.appendChild(span2);
    newDiv.appendChild(span3);
    targetElem.appendChild(newDiv);
  });
}

export default displayComments;