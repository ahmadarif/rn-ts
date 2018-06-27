import React from 'react';
import { createStackNavigator } from 'react-navigation';
import HomeScreen from './screens/Home';
import DetailScreen from './screens/Detail';
import SimpleModal from './modals/Simple';
import BottomTabScreen from './screens/bottom-tab/BottomTab';

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Detail: DetailScreen,
    BottomTab: BottomTabScreen,
    SimpleModal: SimpleModal
  },
  {
    initialRouteName: 'Home'
  }
);

export default class Main extends React.Component {
  render() {
    return (
      <RootStack />
    )
  }
}