import { HelloWordPage } from './app.po';

describe('hello-word App', () => {
  let page: HelloWordPage;

  beforeEach(() => {
    page = new HelloWordPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
