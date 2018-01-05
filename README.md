# ReactNativeTestApp
## A Kitten Explorer
### Setup
Run
```
brew tap wix/brew
brew install --HEAD applesimutils
bundle install
npm install
react-native link
```

### Test
Unit tests: `npm test`

e2e tests: `detox test`

### Run
Run `react-native run-ios`
or `react-native run-android`

### Dependencies
* detox (Setup with Jest)
* detox-cli (globally: `npm install -g detox-cli`)
* Jest
* react-native-elements
* react-native-image-picker
* react-native-permissions
* react-navigation
