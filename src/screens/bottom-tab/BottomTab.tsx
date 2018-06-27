import React from 'react';
import { NavigationScreenProp, createBottomTabNavigator } from 'react-navigation';
import TabA from './TabA';
import TabB from './TabB';
import Icon from 'react-native-vector-icons/FontAwesome';

type Props = {
  navigation: NavigationScreenProp<any>
};

const TabStack = createBottomTabNavigator(
  {
    TabA: {
      screen: TabA,
      navigationOptions: {
        tabBarLabel: 'First Tab',
        tabBarIcon: <Icon name='chevron-up' size={30} />
      }
    },
    TabB: {
      screen: TabB,
      navigationOptions: {
        tabBarLabel: 'Second Tab',
        tabBarIcon: <Icon name='chevron-down' size={30} />
      }
    }
  }
);

export default class BottomTabScreen extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return <TabStack/>;
  }
}

