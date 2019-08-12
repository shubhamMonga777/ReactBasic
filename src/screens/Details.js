import React, { Component } from 'react';
import { Alert, Button, StyleSheet, View ,ToastAndroid} from 'react-native';


export default class Details extends Component {

  constructor(props){
    super(props)
  }

  _onPressButton() {
    this.props.navigation.navigate('News');
  }

  static navigationOptions = {
    title: 'Details',
  };

  

  render() {

    //recieving data
      const { navigation } = this.props;
      const param = navigation.getParam('otherParam','default');
      ToastAndroid.show(param,ToastAndroid.SHORT);

    return (
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <Button
            onPress={this._onPressButton}
            title="Press Me"
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            onPress={this._onPressButton}
            title="Press Me"
            color="#841584"
          />
        </View>
        <View style={styles.alternativeLayoutButtonContainer}>
          <Button
            onPress={this._onPressButton}
            title="This looks great!"
          />
          <Button
            onPress={this._onPressButton}
            title="OK!"
            color="#841584"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   justifyContent: 'center',
  },
  buttonContainer: {
    margin: 20
  },
  alternativeLayoutButtonContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});
