import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import FirstScreen from './FirstScreen';
import SecondScreen from './SecondScreen';
import ThirdScreen from './ThirdScreen';

export default class Parent extends React.Component {
  constructor(props) {
    super(props);

    console.log("parent","construcotr");
    //state to manage the screen visible at a time
    this.state = { val: 1 };
  }

  static navigationOptions = {
    title: 'Parent',
};

  renderElement() {
    //You can add N number of Views here in if-else condition
    if (this.state.val === 1) {
      //Return the FirstScreen as a child to set in Parent View
      return <FirstScreen />;
    } else if (this.state.val === 2) {
      //Return the SecondScreen as a child to set in Parent View
      return <SecondScreen />;
    } else {
      //Return the ThirdScreen as a child to set in Parent View
      return <ThirdScreen />;
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={{ flexDirection: 'row' }}>
          {/*To set the FirstScreen*/}
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.setState({ val: 1 })}>
            <Text style={{ color: '#ffffff' }}>1st View</Text>
          </TouchableOpacity>
          {/*To set the SecondScreen*/}
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.setState({ val: 2 })}>
            <Text style={{ color: '#ffffff' }}>2nd View</Text>
          </TouchableOpacity>
          {/*To set the ThirdScreen*/}
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.setState({ val: 3 })}>
            <Text style={{ color: '#ffffff' }}>3rd View</Text>
          </TouchableOpacity>
        </View>

        {/*Text From Parent Screen*/}
        <Text style={styles.paragraph}>
          Example of view like fragment in React Native
        </Text>

        {/*View to hold the child screens 
        which can be changed on the click of a button*/}
        <View style={{ backgroundColor: '#ffffff' }}>
          {this.renderElement()}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    padding: 8,
    marginTop: 30,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  button: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#808080',
    padding: 10,
    margin: 2,
  },
});