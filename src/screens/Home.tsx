import React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationScreenProp, NavigationScreenOptions } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';

type Props = {
  navigation: NavigationScreenProp<any>
};

export default class HomeScreen extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  static navigationOptions = ({ navigation }: { navigation: NavigationScreenProp<any> }): NavigationScreenOptions => {
    return {
      title: 'Home',
      headerRight: (
        <Icon name='info-outline' size={30} style={{ marginRight: 10 }} onPress={() => navigation.navigate('SimpleModal')} />
      )
    };
  };

  detailClicked() {
    this.props.navigation.navigate('Detail', {
      itemId: 5,
      otherParam: 'anything you want here'
    });
  }

  tabScreen() {
    this.props.navigation.navigate('BottomTab');
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button title="Go to Details" onPress={() => this.detailClicked()} />
        <Text></Text>
        <Button title="Go to BottomTab Screen" onPress={() => this.tabScreen()} />
      </View>
    );
  }
}