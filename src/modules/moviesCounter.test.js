import { JSDOM } from 'jsdom';
import updateCount from './moviesCounter.js';

describe('updateCount', () => {
  test('returns the correct count of movie cards', async () => {
    const dom = new JSDOM('<html><body></body></html>');

    global.document = dom.window.document;
    global.window = dom.window;

    const movieCard1 = document.createElement('div');
    movieCard1.classList.add('movie-card');
    document.body.appendChild(movieCard1);

    const movieCard2 = document.createElement('div');
    movieCard2.classList.add('movie-card');
    document.body.appendChild(movieCard2);

    const count = await updateCount();
    expect(count).toBe('(2)');
  });
});