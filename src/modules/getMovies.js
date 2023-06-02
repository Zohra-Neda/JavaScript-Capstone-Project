// eslint-disable-next-line consistent-return
const getMovie = async (Id) => {
  const response = await fetch(`https://api.tvmaze.com/shows/${Id}`);

  if (response.status === 200) {
    const data = await response.json();
    return data;
  }
};

export default getMovie;