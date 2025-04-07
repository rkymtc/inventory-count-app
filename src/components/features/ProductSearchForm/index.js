import React, { useState } from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Input, Button } from '../../ui';
import { mockProducts } from '../../../utils/mockData';
import { useTheme } from '../../../context/ThemeContext';
import styles from './styles';

const ProductSearchForm = ({ onAddProduct }) => {
  const { colors } = useTheme();
  const [searchText, setSearchText] = useState('');
  const [quantity, setQuantity] = useState('1');
  
  const handleSearch = () => {
    if (!searchText.trim()) return;
    
    const product = mockProducts.find(p => 
      p.kod.toLowerCase().includes(searchText.toLowerCase()) || 
      p.ad.toLowerCase().includes(searchText.toLowerCase())
    );
    
    if (product) {
      const newProduct = {
        ...product,
        miktar: parseInt(quantity) || 1
      };
      
      onAddProduct(newProduct);
      
      setSearchText('');
      setQuantity('1');
    }
  };
  
  return (
    <View style={[styles.container, { backgroundColor: colors.formBackground }]}>
      <Input
        label="Ürün Ara"
        value={searchText}
        onChangeText={setSearchText}
        placeholder="Ürün kodu veya adı"
      />
      
      <Input
        label="Miktar"
        value={quantity}
        onChangeText={setQuantity}
        keyboardType="numeric"
        rightContent={<Icon name="exposure" size={20} color={colors.icon} />}
      />
      
      <View style={styles.buttonContainer}>
        <Button
          title="EKLE"
          onPress={handleSearch}
          type="primary"
          icon={<Icon name="add-circle" size={20} color="white" />}
        />
      </View>
    </View>
  );
};

export { ProductSearchForm }; 