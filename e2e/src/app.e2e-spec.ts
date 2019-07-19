import { AppPage } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display Posiciones message', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('Posiciones');
  });

  it("debe navegar a la tabla de posiciones de Brasil", () => {
    page.navigateTo();
    const element = page.getElementById("linkBrasil")

    element.click()
      .then(() => expect(page.getCurrentUrl()).toContain("BRA"))
  });
})