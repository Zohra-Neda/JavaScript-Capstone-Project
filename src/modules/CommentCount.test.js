import { JSDOM } from 'jsdom';
import CommentCount from './CommentCount.js';

describe('CommentCount', () => {
  beforeEach(() => {
    const dom = new JSDOM('<!doctype html><html><body><div class="titlecomments"></div><ul><li class="commentli">Comment 1</li><li class="commentli">Comment 2</li></ul></body></html>');
    global.document = dom.window.document;
  });

  afterEach(() => {
    global.document = undefined;
  });

  test('displays the correct comment count', () => {
    CommentCount();

    const title = document.querySelector('.titlecomments');
    expect(title.innerText).toBe('Comments (2)');
  });
});
