import React, { useRef } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { useTheme } from '../context/ThemeContext';
import { setTopLevelNavigator } from '../utils/navigationUtils';
import { ROUTES, ANIMATIONS } from './routes';

import { 
  LoginScreen,
  ProductListScreen, 
  ProductAddScreen, 
  CountSheetScreen 
} from '../screens';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  const { colors, isDarkMode } = useTheme();
  const navigationRef = useRef();
  
  const navigationTheme = {
    dark: isDarkMode,
    colors: {
      primary: colors.headerBackground, 
      background: colors.background, 
      card: colors.background,
      text: colors.text,
      border: colors.border || '#e0e0e0',
      notification: '#ff3b30',
    },
  };

  const defaultScreenOptions = {
    headerShown: false,
    contentStyle: {
      backgroundColor: colors.background,
    },
    animation: ANIMATIONS.DEFAULT,
    animationDuration: ANIMATIONS.QUICK,
    gestureEnabled: true,
    gestureDirection: 'horizontal',
  };

  return (
    <NavigationContainer 
      ref={navigationRef}
      theme={navigationTheme}
      onReady={() => {
        setTopLevelNavigator(navigationRef.current);
      }}
    >
      <Stack.Navigator 
        initialRouteName={ROUTES.LOGIN}
        screenOptions={defaultScreenOptions}
      >
        <Stack.Screen 
          name={ROUTES.LOGIN} 
          component={LoginScreen}
          options={{
            ...defaultScreenOptions,
            gestureEnabled: false,
          }}
        />
        
        <Stack.Screen 
          name={ROUTES.PRODUCT_LIST} 
          component={ProductListScreen}
          options={{
            ...defaultScreenOptions,
            animationDuration: ANIMATIONS.QUICK,
          }}
        />
        
        <Stack.Screen 
          name={ROUTES.COUNT_SHEET} 
          component={CountSheetScreen}
          options={{
            ...defaultScreenOptions,
            animationDuration: ANIMATIONS.QUICK,
          }}
        />
        
        <Stack.Screen 
          name={ROUTES.PRODUCT_ADD} 
          component={ProductAddScreen}
          options={{
            ...defaultScreenOptions,
            animationDuration: ANIMATIONS.SLOW,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator; 