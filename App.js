import LoginScreen from './src/screens/LoginScreen';
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'


const navigator = createStackNavigator(
  {
    Login: LoginScreen
  },
  {
    initialRouteName: 'Login',
    defaultNavigationOptions: {
      title:'App'
    }
  }
);

export default createAppContainer(navigator);