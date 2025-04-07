import React from 'react';
import { LogBox } from 'react-native';
import { ThemeProvider } from './src/context/ThemeContext';
import { AppNavigator } from './src/navigation';

LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
  'VirtualizedLists should never be nested inside plain ScrollViews'
]);

const App = () => {
  return (
    <ThemeProvider>
      <AppNavigator />
    </ThemeProvider>
  );
};

export default App;