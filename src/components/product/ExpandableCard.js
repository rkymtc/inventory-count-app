import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const ExpandableCard = ({ 
  title, 
  expanded, 
  onToggle, 
  children, 
  colors, 
  isDarkMode 
}) => (
  <View style={[
    styles.card, 
    { 
      backgroundColor: colors.cardBackground,
      borderColor: colors.border,
      borderWidth: 1
    }
  ]}>
    <TouchableOpacity 
      style={[
        styles.sectionHeader, 
        { borderBottomColor: colors.border }
      ]}
      onPress={onToggle}
      activeOpacity={0.7}
    >
      <Text style={[styles.sectionTitle, { color: colors.text }]}>{title}</Text>
      <Icon 
        name={expanded ? 'keyboard-arrow-up' : 'keyboard-arrow-down'} 
        size={24} 
        color={colors.icon} 
      />
    </TouchableOpacity>
    
    {expanded && (
      <View style={styles.formSection}>
        {children}
      </View>
    )}
  </View>
);

const styles = StyleSheet.create({
  card: {
    borderRadius: 8,
    marginBottom: 16,
    overflow: 'hidden',
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  formSection: {
    padding: 16,
  },
});

export { ExpandableCard }; 