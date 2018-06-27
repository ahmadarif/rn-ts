import React from 'react';
import { NavigationScreenOptions } from 'react-navigation';
import { View, Text } from 'react-native';

export default class SimpleModal extends React.Component {
  static navigationOptions = (): NavigationScreenOptions => {
    return {
      header: null
    }
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize:30 }}>This is modal</Text>
      </View>
    )
  }
}