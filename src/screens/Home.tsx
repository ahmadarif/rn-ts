import React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationScreenProp } from 'react-navigation';

type Props = {
  navigation: NavigationScreenProp<any>
};

export default class HomeScreen extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  static navigationOptions = {
    title: 'Home',
  };

  detailClicked() {
    console.log('diklik');
    console.log(this.props.navigation);

    this.props.navigation.navigate('Detail', {
      itemId: 5,
      otherParam: 'anything you want here'
    });
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button title="Go to Detail" onPress={() => this.detailClicked()} />
      </View>
    );
  }
}