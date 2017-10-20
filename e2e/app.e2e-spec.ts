import { HttpExemple5GLPage } from './app.po';

describe('http-exemple5-gl App', function() {
  let page: HttpExemple5GLPage;

  beforeEach(() => {
    page = new HttpExemple5GLPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
