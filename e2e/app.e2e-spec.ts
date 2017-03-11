import { LanguageTreeAppPage } from './app.po';

describe('language-tree-app App', function() {
  let page: LanguageTreeAppPage;

  beforeEach(() => {
    page = new LanguageTreeAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
