import React from 'react';
import {PaperProvider, Appbar, MD3LightTheme} from 'react-native-paper';
import {AppNavigator} from './navigation/AppNavigator';
import {SafeAreaView} from 'react-native';

const App = () => {
  return (
    <PaperProvider theme={MD3LightTheme}>
      <SafeAreaView style={{flex: 1}}>
        <Appbar.Header>
          <Appbar.Content title="Demo" />
        </Appbar.Header>
        <AppNavigator />
      </SafeAreaView>
    </PaperProvider>
  );
};

export default App;
