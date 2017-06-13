import { FrontListPage } from './app.po';

describe('front-list App', () => {
  let page: FrontListPage;

  beforeEach(() => {
    page = new FrontListPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
