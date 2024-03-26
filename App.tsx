import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {GestureDetectorProvider} from 'react-native-screens/gesture-handler';
import SwipeBackAnimation from './src/SwipeBackAnimation';

type AppProps = {};

const App: React.FC<AppProps> = ({}) => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <GestureDetectorProvider>
        <NavigationContainer>
          <SwipeBackAnimation />
        </NavigationContainer>
      </GestureDetectorProvider>
    </GestureHandlerRootView>
  );
};

export default App;
