import { Angular2RoutesBootstrapPage } from './app.po';

describe('angular2-routes-bootstrap App', function() {
  let page: Angular2RoutesBootstrapPage;

  beforeEach(() => {
    page = new Angular2RoutesBootstrapPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
