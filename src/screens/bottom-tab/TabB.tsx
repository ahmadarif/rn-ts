import React from 'react';
import { View, Text } from 'react-native';

export default class TabB extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: 30 }}>Tab B</Text>
      </View>
    );
  }
}