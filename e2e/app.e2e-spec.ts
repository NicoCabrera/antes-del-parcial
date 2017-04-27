import { AntesDelParcialPage } from './app.po';

describe('antes-del-parcial App', () => {
  let page: AntesDelParcialPage;

  beforeEach(() => {
    page = new AntesDelParcialPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
