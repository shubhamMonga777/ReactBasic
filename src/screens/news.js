import React from 'react';
import { FlatList, ActivityIndicator, Text, View, Image } from 'react-native';

export default class News extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
        }
    }
    static navigationOptions = {
        title: 'News',
    };

    componentDidMount() {
        console.log("response", "mounitng");
        return fetch("https://newsapi.org/v2/everything?q=bitcoin&from=2019-07-09&sortBy=publishedAt&apiKey=973945f3066e4f569dfb1ad2c1d9bed5")
            .then((response) => response.json())
            .then((responseJson) => {
                console.log("response", responseJson);
                this.setState({
                    isLoading: false,
                    dataSource: responseJson.articles,
                },
                    function () { });
            }).catch((error) => {
                console.error(error);
                console.log("error", error);

            });
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
            <View>
                <FlatList
                    data={this.state.dataSource}
                    renderItem={
                        ({ item }) => <View style={{ flex: 1 }}>
                            <Text>{item.source.name}</Text>
                            <Text >{item.author}, {item.publishedAt}</Text>
                            <Image
                                style={{ width: 50, height: 50 }}
                                source={{ uri: item.urlToImage }}
                            />
                        </View>}
                    keyExtractor={({ id }, index) => index}
                />
            </View>
        );
    }

}