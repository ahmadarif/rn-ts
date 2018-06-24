import React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationScreenProp } from 'react-navigation';

type Props = {
  navigation: NavigationScreenProp<any>
};

export default class ModalScreen extends React.Component<Props> {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: 30 }}>This is a modal!</Text>
        <Button
          onPress={() => this.props.navigation.goBack()}
          title="Dismiss"
        />
      </View>
    );
  }
}