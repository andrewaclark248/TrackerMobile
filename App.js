import LoginScreen from './src/screens/LoginScreen';
import WelcomeScreen from './src/screens/WelcomeScreen';

import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { TrackerProvider } from './src/context/TrackerContext'


const navigator = createStackNavigator(
  {
    Login: LoginScreen,
    Welcome: WelcomeScreen
  },
  {
    initialRouteName: 'Login',
    defaultNavigationOptions: {
      title:'App'
    }
  }
);

const App = createAppContainer(navigator);

export default () => {
  return <TrackerProvider>
    <App/>
  </TrackerProvider>
};