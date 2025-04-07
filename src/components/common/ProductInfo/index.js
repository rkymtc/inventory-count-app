import React from 'react';
import { View, Text } from 'react-native';
import { useTheme } from '../../../context/ThemeContext';
import createStyles from './styles';

const ProductInfo = ({ 
  product, 
  showPrice = true,
  style = {},
  titleStyle = {},
  subtitleStyle = {},
  priceStyle = {}
}) => {
  const { colors } = useTheme();
  const styles = createStyles(colors);

  if (!product) return null;

  return (
    <View style={[styles.container, style]}>
      <Text style={[styles.title, titleStyle]}>{product.name}</Text>
      <Text style={[styles.subtitle, subtitleStyle]}>{product.sku}</Text>
      {showPrice && product.price && (
        <Text style={[styles.price, priceStyle]}>
          {typeof product.price === 'number' 
            ? `₺${product.price.toFixed(2)}` 
            : product.price}
        </Text>
      )}
    </View>
  );
};

export { ProductInfo }; 