import { createStackNavigator,createAppContainer } from 'react-navigation';
import Home from "./src/screens/Home";
import Details from "./src/screens/Details";
import News from "./src/screens/news"
import Parent from "./src/screens/parent"
const AppNavigator = createStackNavigator({
  Home: { screen: Home },
  Parent: {screen: Parent}
 

});

const App = createAppContainer(AppNavigator);

export default App;