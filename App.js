import 'react-native-gesture-handler'
import React from 'react';
import {
  Dimensions, SafeAreaView,
} from 'react-native';
import { MainScreen } from './Screens/mainScreen';
import { SearchScreen } from './Screens/searchScreen';
import { ContainerNavigation } from './src/navigation/containerNavigator';



const App = () => {

  return (
    <ContainerNavigation />
  )
};

export default App;