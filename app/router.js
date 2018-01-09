import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import KittenComponent from './Components/KittenComponent';
import SettingsComponent from './Components/SettingsComponent';
import KittensListComponent, { KittenDetailComponent } from './Components/KittensListComponent';
import { Icon } from 'react-native-elements';

const KittensListRouter = new StackNavigator({
  Root: {
    screen: KittensListComponent,
    navigationOptions: {
      title: 'Kittens'
    }
  },
  Details: {
    screen: KittenDetailComponent,
    navigationOptions: {
      title: 'Details'
    }
  }
});

export const Router = new TabNavigator({ 
  Kitten: {
    screen: KittenComponent,
    navigationOptions: {
      tabBarLabel: 'My Kitten',
      tabBarIcon: ({ tintColor }) => <Icon name="rowing" color={tintColor} />
    }
  },
  KittensList: {
    screen: KittensListRouter,
    navigationOptions: {
      tabBarLabel: 'Kittens',
      tabBarIcon: ({ tintColor }) => <Icon name="list" color={tintColor} />,
      tabBarTestIDProps: {
        testID: 'kittensListTestId',
      }
    }
  }, 
  Settings: {
    screen: SettingsComponent,
    navigationOptions: {
      tabBarLabel: 'Settings',
      tabBarIcon: ({ tintColor }) => <Icon name="settings" color={tintColor} />
    }
  }
},
{
  tabBarOptions: {
    initialRouteName: 'KittensList',
    activeTintColor: '#0d0',
    inactiveTintColor: '#cdcdcd',
    swipeEnabled: true,
    labelStyle: {
      fontSize: 12,
    },
    style: {
      backgroundColor: '#fff',
    },
  },
});
