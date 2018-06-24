import React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationScreenProp } from 'react-navigation';

type Props = {
  navigation: NavigationScreenProp<any>
};

export default class DetailScreen extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  static navigationOptions = ({ navigation } : { navigation: NavigationScreenProp<any>}) => {
    return {
      title: navigation.getParam('otherParam', 'A Nested Details Screen'),
    };
  };

  detailClicked() {
    this.props.navigation.push('Detail', {
      itemId: Math.floor(Math.random() * 100),
    });
  }

  homeClicked() {
    this.props.navigation.navigate('Home');
  }

  backClicked() {
    this.props.navigation.goBack();
  }

  render() {
    const { navigation } = this.props;
    const itemId = navigation.getParam('itemId', 'NO-ID');
    const otherParam = navigation.getParam('otherParam', 'some default value');

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Text>itemId: {itemId}</Text>
        <Text>otherParam: {otherParam}</Text>
        <Button title="Go to Details... again" onPress={() => this.detailClicked()} />
        <Button title="Go to Home" onPress={() => this.homeClicked()} />
        <Button title="Go back" onPress={() => this.backClicked()} />
      </View>
    );
  }
}