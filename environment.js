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
    return { envName: 'STAGING', apiUrl: 'stagingURL.com' }; // stage env settings
  } else {
    // assume any other release channel is development
    return { envName: 'DEVELOPMENT', apiUrl: 'localhost:3000'}; // dev env settings
  }
}

export default getEnvironment;