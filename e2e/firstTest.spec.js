describe('Index', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have welcome screen', async () => {
    await expect(element(by.id('myheadertext'))).toBeVisible();
  });

  it('should have the header', async () => {
    await expect(element(by.id('header'))).toBeVisible();
  });

  it('can tap the kitten button', async () => {
    await element(by.id('kittenButton')).tap();
  })
})
