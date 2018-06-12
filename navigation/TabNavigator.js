import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Sentences from '../components/Sentences/Sentences';
import VocabRootTab from '../navigation/VocabRootTab';
import NewVocab from '../components/NewVocab';
import PointsScreen from '../components/PointsScreen';
import AddNewWords from '../components/AddNewWords';
import Login from '../components/Login';
import Categories from '../components/categories/Categories';
import { $tertiaryRed, $secondaryRed, $primaryRed, $primaryWhite, $secondaryWhite } from '../styles/styles';

const tabScreenConfigs = {
  Profile: { screen: Login },
  Categories: { screen: Categories },
  Vocab: { screen: VocabRootTab },
  Sentences: { screen: Sentences },
  Points: { screen: PointsScreen },
  'Add Words': { screen: AddNewWords },
};

const otherTabConfigs = {
  navigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, tintColor }) => {
      const { routeName } = navigation.state;
      let iconName;
      if (routeName === 'Vocab') {
        iconName = 'school';
      } else if (routeName === 'Sentences') {
        iconName = 'short-text';
      } else if (routeName === 'Categories') {
        iconName = 'view-list';
      } else if (routeName === 'Points') {
        iconName = 'bubble-chart';
      } else if (routeName === 'Profile') {
        iconName = 'person';
      } else if (routeName === 'Add Words') {
        iconName = 'person';
      }

      return <Icon name={iconName} size={25} color={tintColor} />;
    },
  }),
  initialRouteName: 'Points',
  tabBarOptions: {
    activeTintColor: $primaryWhite,
    inactiveTintColor: $secondaryWhite,
    activeBackgroundColor: $tertiaryRed,
    inactiveBackgroundColor: $secondaryRed,
    style: {
      borderTopWidth: 0,
      shadowColor: $secondaryWhite,
      shadowOffset: {
        width: 0,
        height: 0,
      },
      shadowOpacity: 0.5,
      shadowRadius: 5,
    },
  },
};

/*
tabBarOptions for TabBarBottom (default tab bar on iOS)
activeTintColor - Label and icon color of the active tab.
activeBackgroundColor - Background color of the active tab.
inactiveTintColor - Label and icon color of the inactive tab.
inactiveBackgroundColor - Background color of the inactive tab.
showLabel - Whether to show label for tab, default is true.
style - Style object for the tab bar.
labelStyle - Style object for the tab label.
tabStyle - Style object for the tab.
allowFontScaling - Whether label font should scale to respect Text Size accessibility settings, default is true.

*/


const RootTab = createBottomTabNavigator(tabScreenConfigs, otherTabConfigs);

export default RootTab;

