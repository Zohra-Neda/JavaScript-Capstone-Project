import updateCount from './moviesCounter.js';

describe('updateCount', () => {
  test('returns the correct count of movie cards', async () => {
    // Create a mock DOM environment using JSDOM
    // eslint-disable-next-line global-require
    const { JSDOM } = require('jsdom');
    const dom = new JSDOM('<html><body></body></html>');

    // Assign the JSDOM global objects to the global object
    global.document = dom.window.document;
    global.window = dom.window;

    // Create and append some movie cards to the DOM
    const movieCard1 = document.createElement('div');
    movieCard1.classList.add('movie-card');
    document.body.appendChild(movieCard1);

    const movieCard2 = document.createElement('div');
    movieCard2.classList.add('movie-card');
    document.body.appendChild(movieCard2);

    // Call the updateCount function and expect the correct count
    const count = await updateCount();
    expect(count).toBe('(2)');
  });
});