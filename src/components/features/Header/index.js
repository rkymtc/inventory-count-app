import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StatusBar, Modal } from 'react-native';
import { useTheme, THEME_MODE } from '../../../context/ThemeContext';
import styles from './styles';

const Header = ({
  title,
  showBackButton = false,
  onBackPress,
  rightIcons = []
}) => {
  const { colors, isDarkMode, toggleTheme, themeMode, setThemeMode } = useTheme();
  const [showThemeMenu, setShowThemeMenu] = useState(false);

  const themeToggleIcon = {
    name: 'theme',
    onPress: () => setShowThemeMenu(true)
  };

  const iconsWithThemeToggle = [
    ...rightIcons,
    themeToggleIcon
  ];

  const handleThemeSelection = (mode) => {
    if (mode === 'toggle') {
      toggleTheme();
    } else {
      setThemeMode(mode);
    }
    setShowThemeMenu(false);
  };

  return (
    <>
      <StatusBar
        backgroundColor={colors.headerBackground}
        barStyle={colors.statusBarStyle}
      />
      <View style={[styles.header, { backgroundColor: colors.headerBackground }]}>
        <View style={styles.leftSection}>
          {showBackButton && (
            <TouchableOpacity 
              style={styles.backButton} 
              onPress={onBackPress}
              activeOpacity={0.7}
            >
              <Text style={[styles.iconText, { color: colors.headerText }]}>←</Text>
            </TouchableOpacity>
          )}
          <Text style={[styles.title, { color: colors.headerText }]}>{title}</Text>
        </View>
        
        <View style={styles.rightSection}>
          {iconsWithThemeToggle.map((icon, index) => (
            <TouchableOpacity
              key={index}
              style={styles.iconButton}
              onPress={icon.onPress}
              activeOpacity={0.7}
            >
              <Text style={[styles.iconText, { color: colors.headerText }]}>
                {icon.name === 'calculate' ? '+' : 
                 icon.name === 'menu' ? '☰' : 
                 icon.name === 'home' ? '⌂' : 
                 icon.name === 'theme' ? (isDarkMode ? '☀️' : '🌙') : '•'}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <Modal
        visible={showThemeMenu}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setShowThemeMenu(false)}
      >
        <TouchableOpacity 
          style={styles.modalOverlay}
          activeOpacity={1}
          onPress={() => setShowThemeMenu(false)}
        >
          <View 
            style={[
              styles.themeMenu, 
              { 
                backgroundColor: colors.formBackground,
                borderColor: colors.border
              }
            ]}
          >
            <Text style={[styles.themeMenuTitle, { color: colors.text }]}>Tema Seçenekleri</Text>
            
            <Text style={[styles.themeMenuItemText, { color: colors.text }]}>
              Sistem ({isDarkMode ? 'Koyu' : 'Açık'})
            </Text>
  
          
            <TouchableOpacity 
              style={[
                styles.themeMenuItem,
                themeMode === THEME_MODE.LIGHT && styles.activeThemeItem,
                { borderColor: colors.border }
              ]}
              onPress={() => handleThemeSelection(THEME_MODE.LIGHT)}
            >
              <Text style={[styles.themeMenuItemText, { color: colors.text }]}>Açık Tema</Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
              style={[
                styles.themeMenuItem,
                themeMode === THEME_MODE.DARK && styles.activeThemeItem,
                { borderColor: colors.border }
              ]}
              onPress={() => handleThemeSelection(THEME_MODE.DARK)}
            >
              <Text style={[styles.themeMenuItemText, { color: colors.text }]}>Koyu Tema</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </Modal>
    </>
  );
};

export { Header }; 