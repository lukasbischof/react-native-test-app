import React, { Component } from 'react';
import { AppRegistry, Text, View, Image, Button, Alert, Platform } from 'react-native';
import MyHeader from './MyHeader'
import { Card, FormLabel, FormInput } from 'react-native-elements'
import Permissions from 'react-native-permissions'
import ImagePicker from 'react-native-image-picker';

export default class KittenComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      kittenSource: require('../../assets/kitten.jpg')
    };
  }

  componentDidMount() {
    Permissions.check('photo').then(response => {
      this.setState({ photoPermission: response })
      console.log(`permisson: ${response}`)
    })
  }

  requestPermission(callback) {
    console.log("permission = " + this.state.photoPermission);
    var a = (Platform.OS == 'android' && this.state.photoPermission == 'denied');
    if (this.state.photoPermission == 'undetermined' || a) {
      console.log('requesting permission...');
      Permissions.request('photo').then(response => {
        this.setState({ photoPermission: response });
        callback(response);
      })
    } else {
      callback(this.state.photoPermission);
    }
  }

  onAddMyKittenButtonPress = () => {
    this.requestPermission((permission) => {
      console.log(permission);
      if (permission == 'authorized') {
        this.showImagePicker();
      } else {
        Alert.alert('No permission', 'Give permission!', [
          { text: 'Ok', onPress: () => console.log('he now knows it...') }
        ]);
      }
    });
  }

  showImagePicker() {
    var options = {
      title: 'Choose your kitten',
      storageOptions: {
        skipBackup: true,
        path: 'images'
      }
    };

    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        this.setState({
          kittenSource: { uri: response.uri }
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
        <Image source={this.state.kittenSource} style={{width: '100%', flex: 2, height: 200}} />
        <View style={{flex: 1}}>
          <FormLabel>Kitten Name</FormLabel>
          <FormInput testID="kittenInputField" />
        </View>
        <View style={{bottom: 0, top: 0, position: 'relative', flex: 2}}>
          <Card>
            <Button
              testID="kittenButton"
              title="Set kitten image"
              onPress={this.onAddMyKittenButtonPress} />
          </Card>
          <Card>
            <Button
              testID="saveKittenButton"
              title="Save kitten"
              onPress={() => {}} />
          </Card>
        </View>
      </View>
    );
  }
}
