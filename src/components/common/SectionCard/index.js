import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';

const SectionCard = ({ 
  title, 
  expanded, 
  onToggle, 
  children, 
  style = {} 
}) => {
  return (
    <View style={[styles.card, style]}>
      <TouchableOpacity 
        style={styles.sectionHeader}
        onPress={onToggle}
        activeOpacity={0.7}
      >
        <Text style={styles.sectionTitle}>{title}</Text>
        <Icon 
          name={expanded ? 'keyboard-arrow-up' : 'keyboard-arrow-down'} 
          size={24} 
          color="#555" 
        />
      </TouchableOpacity>
      
      {expanded && (
        <View style={styles.formSection}>
          {children}
        </View>
      )}
    </View>
  );
};

export { SectionCard }; 