import React from 'react';
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { TabNavigator, TabBarBottom } from 'react-navigation';

import Colors from '../constants/Colors';

import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import HomeNavigator from './HomeNavigator';

export default TabNavigator(
  {
    Home: {
      screen: HomeNavigator,
    },
    Links: {
      screen: LinksScreen,
      navigationOptions:{
        header:null
      }
    },
    Settings: {
      screen: SettingsScreen,
      navigationOptions: {
          headerTitle: 'Info App',
      },
    },
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused }) => {
        const { routeName } = navigation.state;
        let iconName;
        switch (routeName) {
          case 'Home':
            iconName = Platform.OS === 'ios'
              ? `ios-home${focused ? '' : '-outline'}`
              : 'md-home';
              console.log(iconName)
            break;
          case 'Links':
            iconName = Platform.OS === 'ios'
              ? `ios-game-controller-a${focused ? '' : '-outline'}`
              : 'md-game-controller-a';
            break;
          case 'Settings':
            iconName = Platform.OS === 'ios'
              ? `ios-information-circle${focused ? '' : '-outline'}`
              : 'md-information-circle';
        }

/*iconName = Platform.OS === 'ios'
              ? `ios-home${focused ? '' : '-outline'}`
              : 'md-home';*/
        
        return (
          <Ionicons
            name={iconName}
            size={28}
            style={{ marginBottom: -3 }}
            color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
          />
        );
      },
      tabBarLabel:()=>{
        const { routeName } = navigation.state;
        let label=''
        switch (routeName) {
          case 'Home':
            label = 'Home'
            break;
          case 'Links':
            label='Games'
            break;
          case 'Settings':
            label = 'Info App'
        }
        return label
      }
    }),
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false,
  }
);
