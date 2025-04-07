import React, { createContext, useState, useContext, useEffect } from 'react';
import { useColorScheme } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Theme from '../constants/Theme';

export const THEME_MODE = {
  SYSTEM: 'system',
  LIGHT: 'light',
  DARK: 'dark'
};

const ThemeContext = createContext({
  theme: 'light',
  themeMode: THEME_MODE.SYSTEM,
  colors: Theme.light,
  toggleTheme: () => {},
  setThemeMode: () => {},
  isDarkMode: false,
});

export const ThemeProvider = ({ children }) => {
  const deviceTheme = useColorScheme();
  const [themeMode, setThemeMode] = useState(THEME_MODE.SYSTEM);
  const [theme, setTheme] = useState(deviceTheme || 'light');

  useEffect(() => {
    const loadThemePreference = async () => {
      try {
        const savedThemeMode = await AsyncStorage.getItem('themeMode');
        if (savedThemeMode !== null) {
          setThemeMode(savedThemeMode);
          if (savedThemeMode !== THEME_MODE.SYSTEM) {
            setTheme(savedThemeMode);
          } else {
            setTheme(deviceTheme || 'light');
          }
        }
      } catch (error) {
        console.error('Failed to load theme preference', error);
      }
    };
    
    loadThemePreference();
  }, []);

  useEffect(() => {
    if (themeMode === THEME_MODE.SYSTEM && deviceTheme) {
      setTheme(deviceTheme);
    }
  }, [deviceTheme, themeMode]);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    
    if (themeMode === THEME_MODE.SYSTEM) {
      setThemeMode(newTheme);
      saveThemePreference(newTheme);
    }
  };

  const handleSetThemeMode = (mode) => {
    setThemeMode(mode);
    if (mode === THEME_MODE.SYSTEM) {
      setTheme(deviceTheme || 'light');
    } else {
      setTheme(mode);
    }
    saveThemePreference(mode);
  };

  const saveThemePreference = async (mode) => {
    try {
      await AsyncStorage.setItem('themeMode', mode);
    } catch (error) {
      console.error('Failed to save theme preference', error);
    }
  };

  const isDarkMode = theme === 'dark';

  const colors = Theme[theme];

  const themeContextValue = {
    theme,
    themeMode,
    colors,
    toggleTheme,
    setThemeMode: handleSetThemeMode,
    isDarkMode,
  };

  return (
    <ThemeContext.Provider value={themeContextValue}>
      {children}
    </ThemeContext.Provider>
  );
};


export const useTheme = () => useContext(ThemeContext);

export default ThemeContext; 