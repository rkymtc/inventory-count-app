import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity, Platform } from 'react-native';
import { useTheme } from '../../../context/ThemeContext';
import styles from './styles';

const Input = ({ 
  label,
  value,
  onChangeText,
  placeholder = '',
  editable = true,
  rightContent = null,
  keyboardType = 'default',
  containerStyle = {},
  multiline = false,
  numberOfLines = 1,
  onRightIconPress = null,
  type = 'text'
}) => {
  const { colors } = useTheme();
  const [localValue, setLocalValue] = useState(value);
  const timeoutRef = useRef(null);

  useEffect(() => {
    setLocalValue(value);
  }, [value]);

  const handleTextChange = (text) => {
    setLocalValue(text);
    
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    
    timeoutRef.current = setTimeout(() => {
      if (onChangeText) {
        onChangeText(text);
      }
    }, 100); 
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const isCalendarIcon = rightContent && 
    React.isValidElement(rightContent) && 
    rightContent.props.name === 'calendar-today';
    
  const handleRightIconPress = () => {
    if (type === 'date' && onRightIconPress) {
      onRightIconPress();
    } else if (onRightIconPress) {
      onRightIconPress();
    }
  };

  const handleInputPress = () => {
    if (type === 'date' && onRightIconPress) {
      onRightIconPress();
    }
  };

  const getKeyboardType = () => {
    if (type === 'date') {
      return 'numeric';
    }
    return keyboardType;
  };

  const renderLabel = () => {
    if (Platform.OS === 'android' && (label === 'GENEL BAKİYE' || label === 'AMBAR BAKİYE')) {
      const words = label.split(' ');
      return (
        <View style={styles.multilineLabel}>
          <Text style={[styles.label, { color: colors.label }]}>{words[0]}</Text>
          <Text style={[styles.label, { color: colors.label }]}>{words[1]}</Text>
        </View>
      );
    }
    
    return (
      <Text style={[styles.label, { color: colors.label }]}>{label}</Text>
    );
  };

  return (
    <View style={[styles.inputContainer, containerStyle]}>
      {label && (
        <View style={styles.labelContainer}>
          {renderLabel()}
          <Text style={[styles.separator, { color: colors.label }]}>:</Text>
        </View>
      )}
      <View style={[
        styles.inputWrapper,
        {
          borderBottomColor: editable ? colors.inputBorder : colors.buttonDisabled,
        },
        !editable && styles.disabledInputWrapper,
        type === 'date' && { borderBottomColor: colors.buttonPrimary }
      ]}>
        <TouchableOpacity 
          activeOpacity={1.0}
          style={{ flex: 1 }}
          onPress={handleInputPress}
          disabled={type !== 'date'}
        >
          <TextInput
            style={[
              styles.input,
              { 
                color: colors.inputText,
              },
              !editable && { color: colors.buttonDisabledText },
              multiline && { height: 20 * numberOfLines },
              type === 'date' && { color: colors.inputText, fontWeight: '500' }
            ]}
            value={localValue}
            onChangeText={handleTextChange}
            placeholder={placeholder}
            placeholderTextColor={colors.placeholder}
            editable={editable}
            keyboardType={getKeyboardType()}
            multiline={multiline}
            numberOfLines={multiline ? numberOfLines : undefined}
            pointerEvents={type === 'date' ? 'none' : 'auto'}
          />
        </TouchableOpacity>
        {rightContent && (
          <TouchableOpacity 
            style={[
              styles.rightContent,
              isCalendarIcon && styles.calendarButton
            ]}
            disabled={type === 'date' ? false : !editable}
            onPress={handleRightIconPress}
          >
            {rightContent}
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export { Input }; 