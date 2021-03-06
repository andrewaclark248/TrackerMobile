import Constants from "expo-constants";
import { Platform } from "react-native";
import * as Updates from 'expo-updates';


const localhost =
 Platform.OS === "ios" ? "localhost:8080" : "10.0.2.2:8080";

 function getEnvironment() {
  if (Updates.releaseChannel.startsWith('prod')) {
    // matches prod-v1, prod-v2, prod-v3
    return { envName: 'PRODUCTION', apiUrl: 'productionURL.com'}; // prod env settings
  } else if (Updates.releaseChannel.startsWith('staging')) {
    // matches staging-v1, staging-v2
    return { envName: 'STAGING', 
            apiUrl: 'http://trackerv1.com/',
            loginURL: 'http://trackerv1.com/api/v1/authenticate' }; // stage env settings
  } else {
    // assume any other release channel is development
    return { envName: 'DEVELOPMENT', 
            apiUrl: 'localhost:3000/home/api/someurl',
            loginURL: 'http://tracker-app-domain.ngrok.io/api/authenticate'}; // dev env settings
  }
}

export default getEnvironment;