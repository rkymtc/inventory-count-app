import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { CustomInput, DatePicker } from '..';

const BasicInfoSection = ({
  miktar,
  setMiktar,
  birim,
  fiyat,
  setFiyat,
  kdv,
  setKdv,
  dahil, 
  handleToggleDahil,
  ambar,
  setAmbar,
  teslimTarihi,
  handleDateChange,
  handleArttir,
  refreshIcon,
  colors,
  isDarkMode
}) => (
  <>
    <View style={styles.quantityRow}>
      <View style={styles.birimSection}>
        <CustomInput 
          label="MİKTAR"
          value={miktar}
          onChangeText={setMiktar}
          keyboardType="numeric"
          containerStyle={styles.inputContainer}
          rightContent={
            <TouchableOpacity 
              onPress={handleArttir} 
              style={[
                styles.incrementButton,
                { backgroundColor: colors.buttonPrimary }
              ]}
            >
              <Icon name="add" size={16} color={colors.buttonPrimaryText} />
            </TouchableOpacity>
          }
        />
      </View>
      
      <Text style={[styles.separator, { color: colors.text }]}>x</Text>
      
      <View style={[
        styles.birimValueSection, 
        { 
          backgroundColor: isDarkMode ? colors.cardDetailsBackground : '#f5f5f5',
          borderColor: colors.cardBorder,
          borderWidth: isDarkMode ? 1 : 0
        }
      ]}>
        <Text style={[styles.birimValue, { color: colors.text }]}>{birim || 'ADET'}</Text>
      </View>
    </View>
    
    <View style={styles.rowContainer}>
      <CustomInput 
        label="FİYAT"
        value={fiyat}
        onChangeText={setFiyat}
        keyboardType="numeric"
        containerStyle={[styles.inputContainer, {flex: 1}]}
      />
    </View>
    
    <View style={styles.checkboxRow}>
      <CustomInput 
        label="KDV"
        value={kdv}
        onChangeText={setKdv}
        keyboardType="numeric"
        containerStyle={[styles.inputContainer, {flex: 1}]}
      />
      
      <TouchableOpacity 
        style={[
          styles.checkbox,
          { 
            backgroundColor: isDarkMode ? colors.cardDetailsBackground : '#f5f5f5',
            borderColor: colors.cardBorder,
            borderWidth: isDarkMode ? 1 : 0
          }
        ]}
        onPress={handleToggleDahil}
        activeOpacity={0.7}
      >
        <View style={[
          styles.checkboxInner,
          dahil && styles.checkboxChecked,
          { borderColor: colors.buttonPrimary },
          dahil && { backgroundColor: colors.buttonPrimary }
        ]}>
          {dahil && <Icon name="check" size={14} color="#fff" />}
        </View>
        <Text style={[styles.checkboxLabel, { color: colors.text }]}>DAHİL</Text>
      </TouchableOpacity>
    </View>
    
    <CustomInput 
      label="AMBAR"
      value={ambar}
      onChangeText={setAmbar}
      containerStyle={styles.inputContainer}
      rightContent={refreshIcon}
      onRightIconPress={() => {}}
    />
    
    <DatePicker
      label="TESLİM TARİHİ"
      value={teslimTarihi}
      onChange={handleDateChange}
      placeholder="Teslim tarihi seçiniz"
    />
  </>
);

const styles = StyleSheet.create({
  quantityRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  birimSection: {
    flex: 1,
  },
  separator: {
    paddingHorizontal: 8,
    fontSize: 16,
    fontWeight: 'bold',
  },
  birimValueSection: {
    flex: 0.5,
    paddingHorizontal: 12,
    paddingVertical: 14,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  birimValue: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  rowContainer: {
    flexDirection: 'row',
    marginBottom: 12,
  },
  inputContainer: {
    marginBottom: 12,
  },
  checkboxRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  checkbox: {
    flex: 0.5,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 12,
    borderRadius: 6,
    marginLeft: 8,
  },
  checkboxInner: {
    width: 20,
    height: 20,
    borderRadius: 4,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxChecked: {
    backgroundColor: '#2196F3',
    borderColor: '#2196F3',
  },
  checkboxLabel: {
    marginLeft: 8,
    fontSize: 14,
  },
  incrementButton: {
    width: 24,
    height: 24,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export { BasicInfoSection }; 