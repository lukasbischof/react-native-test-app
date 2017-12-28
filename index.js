import React, { Component } from 'react';
import { AppRegistry, Text, View, Image, Button, Alert } from 'react-native';
import MyHeader from './Components/MyHeader'
import { Card } from 'react-native-elements'

export default class App extends React.Component {
  onAddMyKittenButtonPress() {
    var ImagePicker = require('react-native-image-picker');

    // More info on all the options is below in the README...just some common use cases shown here
    var options = {
      title: 'Select Avatar',
      customButtons: [
        {name: 'fb', title: 'Choose Photo from Facebook'},
      ],
      storageOptions: {
        skipBackup: true,
        path: 'images'
      }
    };

    /**
     * The first arg is the options object for customization (it can also be null or omitted for default options),
     * The second arg is the callback which sends object: response (more info below in README)
     */
    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      }
      else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      }
      else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      }
      else {
        let source = { uri: response.uri };

        // You can also display the image using data:
        // let source = { uri: 'data:image/jpeg;base64,' + response.data };

        this.setState({
          avatarSource: source
        });
      }
    });
  }

  render() {
    let titleStyle = {
      fontSize: 40,
      marginTop: 20,
      textAlign: 'center'
    };

    return (
      <View style={{flex: 1}}>
        <Image source={require('./assets/kitten.jpg')} style={{width: '100%', flex: 1, height: 200}} />
        <MyHeader content="Kitten palace" />
        <View style={{bottom: 0, top: 0, position: 'relative', flex: 1}}>
          <Card title="Custom">
            <Button
              title="Add my kitten"
              onPress={this.onAddMyKittenButtonPress} />
          </Card>
        </View>
      </View>
    );
  }
}

AppRegistry.registerComponent('ReactNativeTestApp', () => App)
