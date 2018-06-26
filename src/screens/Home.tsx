import React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationScreenProp } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';

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
      headerRight: (
        <Icon name='info-outline' size={30} style={{marginRight: 10}} onPress={() => HomeScreen.infoClicked()} />
      ),
    };
  };

  detailClicked() {
    this.props.navigation.navigate('Detail', {
      itemId: 5,
      otherParam: 'anything you want here'
    });
  }

  static infoClicked(): any {
    alert('nah diklik');
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button title="Go to Details" onPress={() => this.detailClicked()} />
      </View>
    );
  }
}