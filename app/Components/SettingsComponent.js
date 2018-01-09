import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class SettingsComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Text style={{fontSize: 40, fontWeight: 'bold', margin: 20}}>
          Settings
        </Text>
      </View>
    );
  }
}
