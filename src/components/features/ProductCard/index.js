import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useTheme } from '../../../context/ThemeContext';
import styles from './styles';

const ProductCard = ({
  product,
  onPress,
  showDetailedInfo = true
}) => {
  const { colors, isDarkMode } = useTheme();
  const {
    kod,
    ad,
    miktar,
    birim,
    fili,
    siparis,
    stok,
    satisF,
    satisB
  } = product;

  return (
    <TouchableOpacity 
      style={[
        styles.card, 
        { 
          backgroundColor: colors.cardBackground,
          borderColor: colors.cardBorder,
          borderWidth: isDarkMode ? 1 : 0
        }
      ]} 
      onPress={onPress} 
      activeOpacity={0.8}
    >
      <View style={styles.mainContent}>
        <View style={styles.codeSection}>
          <View style={[
            styles.kodBadge, 
            { backgroundColor: colors.cardBadgeBackground }
          ]}>
            <Text style={[styles.kodLabel, { color: colors.buttonPrimary }]}>{kod}</Text>
          </View>
          <View style={[
            styles.noImageContainer, 
            { 
              backgroundColor: colors.cardIconBackground,
             
              borderWidth: isDarkMode ? 1 : 0
            }
          ]}>
            <Text style={styles.productIcon}>📦</Text>
          </View>
        </View>
        <View style={styles.detailsSection}>
          <Text style={[styles.productName, { color: colors.headerBackground }]}>{ad}</Text>
          {showDetailedInfo && (
            <View style={[
              styles.detailsContainer, 
              { 
                backgroundColor: colors.cardDetailsBackground,
                borderColor: colors.cardBorder,
                borderWidth: isDarkMode ? 1 : 0
              }
            ]}>
              <View style={styles.stockRow}>
                <View style={styles.stockItem}>
                  <Text style={[styles.stockLabel, { color: colors.label }]}>Fiili:</Text>
                  <Text style={[
                    styles.stockValue, 
                    { color: colors.text },
                    fili < 0 && { color: colors.negativeValue }
                  ]}>{fili < 0 ? fili : fili}</Text>
                </View>
                <View style={styles.stockItemRight}>
                  <Text style={[styles.stockLabel, { color: colors.label }]}>Sipariş:</Text>
                  <Text style={[styles.stockValue, { color: colors.text }]}>{siparis}</Text>
                </View>
              </View>
              <View style={styles.stockRow}>
                <View style={styles.stockItem}>
                  <Text style={[styles.stockLabel, { color: colors.label }]}>Stok:</Text>
                  <Text style={[
                    styles.stockValue, 
                    { color: colors.text },
                    stok < 0 && { color: colors.negativeValue }
                  ]}>{stok}</Text>
                </View>
              </View>
              <View style={[
                styles.priceContainer, 
                { borderTopColor: colors.border }
              ]}>
                <Text style={[styles.priceLabel, { color: colors.label }]}>Satış Fiyatı:</Text>
                <Text style={[styles.priceValue, { color: colors.buttonPrimary }]}>{satisF} {satisB}</Text>
              </View>
            </View>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export { ProductCard }; 