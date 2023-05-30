const getMovies = async () => {
  const response = await fetch('https://api.tvmaze.com/shows');
  const shows = await response.json();
  return shows;
};

export default getMovies;