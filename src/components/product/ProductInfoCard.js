import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { CustomInput } from '..';

const ProductInfoCard = ({ kod, ad, genelBakiye, ambarBakiye, colors, isDarkMode }) => (
  <View style={[
    styles.card, 
    { 
      backgroundColor: colors.cardBackground,
      borderColor: colors.border, 
      borderWidth: 1
    }
  ]}>
    <View style={styles.productInfoSection}>
      <Text style={[styles.sectionTitle, { color: colors.text }]}>Ürün Bilgileri</Text>
      
      <CustomInput 
        label="KOD"
        value={kod}
        editable={false}
        containerStyle={styles.readonlyInput}
      />
      
      <CustomInput
        label="ADI"
        value={ad}
        editable={false}
        containerStyle={styles.readonlyInput}
      />
      
      <View style={styles.balanceSection}>
        <CustomInput 
          label="GENEL BAKİYE"
          value={genelBakiye}
          editable={false}
          containerStyle={styles.readonlyInput}
        />
        
        <CustomInput 
          label="AMBAR BAKİYE"
          value={ambarBakiye}
          editable={false}
          containerStyle={styles.readonlyInput}
        />
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  card: {
    borderRadius: 8,
    marginBottom: 16,
    overflow: 'hidden',
  },
  productInfoSection: {
    padding: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  balanceSection: {
    marginTop: 8,
  },
  readonlyInput: {
    marginBottom: 12,
    backgroundColor: 'transparent',
  },
});

export { ProductInfoCard }; 