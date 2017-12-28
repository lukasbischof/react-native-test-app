import React, { Component } from 'react';
import { TabNavigator } from 'react-navigation';
import KittenComponent from './Components/KittenComponent';
import { Icon } from 'react-native-elements';

export const Router = new TabNavigator({
  Kittens: {
    screen: KittenComponent,
    navigationOptions: {
        tabBarLabel: 'Kittens',
        tabBarIcon: ({ tintColor }) => <Icon name="rowing" color={tintColor} />
    }
  }
});
