import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useTheme } from '../../../context/ThemeContext';
import createStyles from './styles';

const ExpandableCard = ({ 
  title, 
  children, 
  initialExpanded = false,
  style = {},
  titleStyle = {},
  contentStyle = {}
}) => {
  const [expanded, setExpanded] = useState(initialExpanded);
  const { colors } = useTheme();
  const styles = createStyles(colors);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <View style={[styles.container, style]}>
      <TouchableOpacity 
        style={styles.header}
        onPress={toggleExpanded}
        activeOpacity={0.7}
      >
        <Text style={[styles.title, titleStyle]}>{title}</Text>
        <Icon 
          name={expanded ? 'keyboard-arrow-up' : 'keyboard-arrow-down'} 
          size={24} 
          color={colors.text} 
        />
      </TouchableOpacity>
      
      {expanded && (
        <View style={[styles.content, contentStyle]}>
          {children}
        </View>
      )}
    </View>
  );
};

export { ExpandableCard }; 