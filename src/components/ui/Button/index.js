import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { useTheme } from '../../../context/ThemeContext';
import styles from './styles';

const Button = ({
  title,
  onPress,
  type = 'primary', 
  fullWidth = true,
  disabled = false,
  icon = null,
  style = {}
}) => {
  const { colors } = useTheme();
  
  const buttonStyles = [
    styles.button,
    fullWidth && styles.fullWidth,
    type === 'primary' && {
      backgroundColor: colors.buttonPrimary,
      borderWidth: 0,
    },
    type === 'secondary' && {
      backgroundColor: colors.buttonSecondary,
      borderWidth: 1,
      borderColor: colors.buttonSecondaryBorder,
    },
    type === 'danger' && {
      backgroundColor: colors.buttonDanger,
      borderWidth: 0,
    },
    disabled && {
      backgroundColor: colors.buttonDisabled,
      borderColor: colors.buttonDisabled,
    },
    style
  ];

  const textStyles = [
    styles.text,
    type === 'primary' && {
      color: colors.buttonPrimaryText,
    },
    type === 'secondary' && {
      color: colors.buttonSecondaryText,
    },
    type === 'danger' && {
      color: colors.buttonDangerText,
    },
    disabled && {
      color: colors.buttonDisabledText,
    }
  ];

  return (
    <TouchableOpacity 
      style={buttonStyles} 
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.75}
    >
      <View style={styles.buttonContent}>
        {icon && <View style={styles.iconContainer}>{icon}</View>}
        <Text style={textStyles}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export { Button }; 