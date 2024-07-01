/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { globalStyles } from './src/theme/app-theme';
import { CalculatorScreen } from './src/screens/CalculatorScreen';


function App(): React.JSX.Element {



  return (
    <View style={globalStyles.background}>
      <StatusBar
        barStyle={'light-content'}
      />
      <CalculatorScreen />
    </View>
  );
}


export default App;
