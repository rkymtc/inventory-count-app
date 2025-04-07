import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useTheme } from '../../../context/ThemeContext';
import styles from './styles';

const ProductItem = ({ 
  item, 
  onDelete, 
  onAccept 
}) => {
  const { colors } = useTheme();
  
  return (
    <View style={[styles.listItem, { backgroundColor: colors.cardBackground }]}>
      <View style={styles.productInfo}>
        <Text style={[styles.productCode, { color: colors.text }]}>{item.kod}</Text>
        <Text style={[styles.productName, { color: colors.buttonDanger }]}>{item.ad}</Text>
        <Text style={[styles.productAmount, { color: colors.text }]}>MİKTAR: {item.birim} ({item.miktar})</Text>
      </View>
      <View style={styles.actions}>
        <TouchableOpacity 
          style={styles.deleteButton}
          onPress={() => onDelete(item)}
        >
          <Icon name="close" size={24} color={colors.buttonDanger} />
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.acceptButton}
          onPress={() => onAccept(item)}
        >
          <Icon name="check-circle" size={24} color={colors.buttonPrimary} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export { ProductItem }; 