import React, { Component } from 'react';
import { TabNavigator } from 'react-navigation';
import KittenComponent from './Components/KittenComponent';
import SettingsComponent from './Components/SettingsComponent';
import { Icon } from 'react-native-elements';

export const Router = new TabNavigator({
  Kittens: {
    screen: KittenComponent,
    navigationOptions: {
        tabBarLabel: 'Kittens',
        tabBarIcon: ({ tintColor }) => <Icon name="rowing" color={tintColor} />
    }
  },
  Settings: {
    screen: SettingsComponent,
    navigationOptions: {
      tabBarLabel: 'Settings',
      tabBarIcon: ({ tintColor }) => <Icon name="settings" color={tintColor} />
    }
  }
});
