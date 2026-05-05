import React from 'react';
import { StatusBar, useColorScheme } from 'react-native';
import { RootNavigator } from './src/navigation';

function App(): React.JSX.Element {
  const isDark = useColorScheme() === 'dark';

  return (
    <>
      <StatusBar barStyle={isDark ? 'light-content' : 'dark-content'} />
      <RootNavigator />
    </>
  );
}

export default App;
