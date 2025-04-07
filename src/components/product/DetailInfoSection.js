import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { CustomInput } from '..';

const DetailInfoSection = ({
  net,
  fiyat,
  isk1,
  setIsk1,
  isk2,
  setIsk2,
  isk3,
  setIsk3,
  aciklama,
  setAciklama,
  colors
}) => (
  <>
    <View style={[
      styles.priceDetailRow, 
      { borderBottomColor: colors.border }
    ]}>
      <Text style={[styles.labelText, { color: colors.label }]}>Net Fiyat:</Text>
      <Text style={[styles.priceValue, { color: colors.buttonPrimary }]}>{net || fiyat || '0.00'}</Text>
    </View>
    
    <Text style={[styles.labelText, { color: colors.label }]}>İSKONTO %</Text>
    <View style={styles.discountRow}>
      <CustomInput 
        value={isk1}
        onChangeText={setIsk1}
        keyboardType="numeric"
        containerStyle={[styles.inputContainer, styles.discountInput]}
        placeholder="İsk 1"
      />
      
      <CustomInput 
        value={isk2}
        onChangeText={setIsk2}
        keyboardType="numeric"
        containerStyle={[styles.inputContainer, styles.discountInput]}
        placeholder="İsk 2"
      />
      
      <CustomInput 
        value={isk3}
        onChangeText={setIsk3}
        keyboardType="numeric"
        containerStyle={[styles.inputContainer, styles.discountInput]}
        placeholder="İsk 3"
      />
    </View>
    
    <CustomInput 
      label="AÇIKLAMA"
      value={aciklama}
      onChangeText={setAciklama}
      containerStyle={styles.inputContainer}
      multiline={true}
      numberOfLines={2}
    />
  </>
);

const styles = StyleSheet.create({
  priceDetailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 12,
    marginBottom: 12,
    borderBottomWidth: 1,
  },
  labelText: {
    fontSize: 14,
    marginBottom: 8,
  },
  priceValue: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  discountRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  inputContainer: {
    marginBottom: 12,
  },
  discountInput: {
    flex: 1,
    marginRight: 8,
  },
});

export { DetailInfoSection }; 