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

  static navigationOptions = ({ navigation }: {navigation: NavigationScreenProp<any>}) => {
    return {
      title: 'Home',
      headerLeft: (
        <Button onPress={() => navigation.navigate('MyModal')} title="Info" color="#000" />
      ),
    };
  };

  detailClicked() {
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