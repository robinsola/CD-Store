import { CdStorePage } from './app.po';

describe('cd-store App', () => {
  let page: CdStorePage;

  beforeEach(() => {
    page = new CdStorePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
