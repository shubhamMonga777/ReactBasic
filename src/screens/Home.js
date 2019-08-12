import React from 'react';
import { FlatList, ActivityIndicator, Text, View, ToastAndroid } from 'react-native';
import { BottomNavigation } from 'react-native-paper';

const MusicRoute = () => <Text>Music</Text>;
const AlbumsRoute = () => <Text>Albums</Text>;
const RecentsRoute = () => <Text>Recents</Text>;


export default class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      index: 0,
      routes: [
        { key: 'music', title: 'Music', icon: 'queue-music' },
        { key: 'albums', title: 'Albums', icon: 'album' },
        { key: 'recents', title: 'Recents', icon: 'history' },
      ],
    }
  }


  static navigationOptions = {
    title: 'Home',
  };

  componentDidMount() {

    console.log("compoment","mounting");
    return fetch('https://facebook.github.io/react-native/movies.json')
      .then((response) => response.json())
      .then((responseJson) => {

        console.log("response",responseJson);
        this.setState({
          isLoading: false,
          dataSource: responseJson.movies,
        }, function () {

          console.log("callback","funcation");

        });

      })
      .catch((error) => {
        console.error(error);
        console.log("error","error");
      });
  }

  _handleIndexChange = index => this.setState({ index });

  renderScene = ({ route, jumpTo }) => {
    switch (route.key) {
      case 'music':
        return <MusicRoute jumpTo={jumpTo} />;
      case 'albums':
        return <AlbumsRoute jumpTo={jumpTo} />;
    }
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, padding: 20 }}>
          <ActivityIndicator />
        </View>
      )
    }

    return (
      <View style={{ flex: 1, paddingTop: 20 }}>
        <FlatList
          data={this.state.dataSource}
          renderItem={({ item }) => <Text onPress={() => this.onAction(item.title)}
          >{item.title}, {item.releaseYear}</Text>}
          keyExtractor={({ id }, index) => index}
        />

        <BottomNavigation
          navigationState={this.state}
          onIndexChange={this._handleIndexChange}
          renderScene={this.renderScene} />
      </View>
    );
  }

  //passing data
  onAction(name) {
    console.log("home","OnAction");
    this.props.navigation.navigate('Parent');
  }
}