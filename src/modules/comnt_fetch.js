const fetchComments = async (id) => {
  try {
    const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/uHJS5mPPPDDpgRsHQqad/comments?item_id=item${id}`);
    const data = await response.json();
    const dataArr = Array.from(data);
    return dataArr;
  } catch (error) {
    console.error('Error fetching scores:', error);
    return [];
  }
};
const saveComments = async (id, userName, userComment) => {
  const comntUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/uHJS5mPPPDDpgRsHQqad/comments';
  try {
    await fetch(comntUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        item_id: `item${id}`,
        username: userName,
        comment: userComment,
      }),
    });

    console.log('Score saved successfully!');
  } catch (error) {
    console.error('Error saving the score:', error);
  }
};

export { fetchComments, saveComments };