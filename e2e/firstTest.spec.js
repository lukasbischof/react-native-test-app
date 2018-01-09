describe('Index', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have kitten name input field', async () => {
    await expect(element(by.id('kittenInputField'))).toBeVisible();
  });

  it('should have save button', async () => {
    await expect(element(by.id('saveKittenButton'))).toBeVisible();
  });

  it('can tap the kitten button', async () => {
    await device.launchApp({permissions: {photos: 'YES'}});
    await element(by.id('kittenButton')).tap();
  });

  it('can go to the home screen', async () => {
    console.log(device);
    console.log(by.id('kittensListTestId'));
    await device.sendToHome();
    await device.launchApp({newInstance: false});
  });
})
