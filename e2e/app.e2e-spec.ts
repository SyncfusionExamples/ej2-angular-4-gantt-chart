import { gantt-angular4Page } from './app.po';

describe('gantt-angular4 App', () => {
  let page: gantt-angular4Page;

  beforeEach(() => {
    page = new gantt-angular4Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
