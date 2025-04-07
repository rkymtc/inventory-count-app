import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const ActionButtons = ({ onDetay, onAmbar, onEkle, colors }) => (
  <View style={styles.buttonContainer}>
    <TouchableOpacity 
      style={[styles.button, styles.outlineButton, { borderColor: '#2874A6' }]} 
      onPress={onDetay}
      activeOpacity={0.7}
    >
      <Icon name="search" size={20} color="#2874A6" style={styles.buttonIcon} />
      <Text style={[styles.buttonText, { color: '#2874A6' }]}>DETAY</Text>
    </TouchableOpacity>
    
    <TouchableOpacity 
      style={[styles.button, styles.outlineButton, { borderColor: '#2874A6' }]} 
      onPress={onAmbar}
      activeOpacity={0.7}
    >
      <Icon name="autorenew" size={20} color="#2874A6" style={styles.buttonIcon} />
      <Text style={[styles.buttonText, { color: '#2874A6' }]}>AMBAR</Text>
    </TouchableOpacity>
    
    <TouchableOpacity 
      style={[styles.button, styles.filledButton, { backgroundColor: '#2874A6' }]} 
      onPress={onEkle}
      activeOpacity={0.7}
    >
      <Icon name="add" size={20} color="#FFFFFF" style={styles.buttonIcon} />
      <Text style={[styles.buttonText, { color: '#FFFFFF' }]}>EKLE</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
    marginBottom: 24,
    paddingHorizontal: 16,
  },
  button: {
    flex: 1,
    height: 56,
    marginHorizontal: 4,
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  outlineButton: {
    backgroundColor: 'transparent',
    borderWidth: 1,
  },
  filledButton: {
    backgroundColor: '#2874A6',
  },
  buttonText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  buttonIcon: {
    marginRight: 8,
  }
});

export { ActionButtons }; 