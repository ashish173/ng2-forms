import { Ng2FormsPage } from './app.po';

describe('ng2-forms App', function() {
  let page: Ng2FormsPage;

  beforeEach(() => {
    page = new Ng2FormsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
