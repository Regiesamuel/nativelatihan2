import React, {Component} from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Home from './Home';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  Button,
  Alert,
  TouchableOpacity,
  Image,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#e1e5eb',
    marginBottom: 5,
  },
  gambar: {
    width: 300,
    height: 300,
  },
});

class SplashScreen extends React.Component {
  render() {
    const viewStyles = [styles.container, {backgroundColor: '#e1e5eb'}];
    const textStyles = {
      color: 'white',
      fontSize: 40,
      fontWeight: 'bold',
    };

    return (
      <View style={viewStyles}>
        <Image
          style={styles.gambar}
          source={require('./img/facebooklogo.png')}
        />
      </View>
    );
  }
}

export default class Navigator extends Component {
  constructor(props) {
    super(props);
    this.state = {isLoading: true};
  }

  performTimeConsumingTask = async () => {
    return new Promise((resolve) =>
      setTimeout(() => {
        resolve('result');
      }, 3000),
    );
  };

  async componentDidMount() {
    // Preload data from an external API
    // Preload data using AsyncStorage
    const data = await this.performTimeConsumingTask();
    if (data !== null) {
      this.setState({isLoading: false});
    }
  }

  render() {
    if (this.state.isLoading) {
      return <SplashScreen />;
    }
    return <AppContainer />;
  }
}

const AppStackNavigator = createStackNavigator({
  //Home: {screen: Home},
  Home: {
    screen : Home,
    navigationOptions: {
      header: null,
    }
  }
});
const AppContainer = createAppContainer(AppStackNavigator);