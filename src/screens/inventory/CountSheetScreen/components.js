import React from 'react';
import { View, FlatList, ScrollView, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';
import { CustomButton, CustomInput, DatePicker, ProductItem, ProductSearchForm } from '../../../components';


export const SearchTab = ({ onAddProduct }) => (
  <View style={styles.tabContent}>
    <ProductSearchForm onAddProduct={onAddProduct} />
  </View>
);

export const ListTab = ({ products, onDeleteProduct, onAcceptProduct }) => (
  <View style={styles.tabContent}>
    <FlatList
      data={products}
      keyExtractor={item => item.kod}
      renderItem={({ item }) => (
        <ProductItem 
          item={item} 
          onDelete={onDeleteProduct}
          onAccept={onAcceptProduct}
        />
      )}
    />
  </View>
);


export const TotalTab = ({ 
  navigation,
  sourceCompany,
  setSourceCompany,
  factory,
  setFactory,
  sourceWarehouse,
  setSourceWarehouse,
  date,
  setDate,
  voucherNo,
  setVoucherNo,
  specialCode1,
  setSpecialCode1,
  notes,
  setNotes,
  colors
}) => (
  <ScrollView style={styles.tabContent}>
    <View style={[styles.formGroup, { backgroundColor: colors.formBackground }]}>
      <CustomInput
        label="KAYNAK İŞYERİ"
        value={sourceCompany}
        onChangeText={setSourceCompany}
      />
      <CustomInput
        label="FABRİKA"
        value={factory}
        onChangeText={setFactory}
      />
      <CustomInput
        label="KAYNAK AMBAR"
        value={sourceWarehouse}
        onChangeText={setSourceWarehouse}
      />
      <DatePicker
        label="TARİH"
        value={date}
        onChange={setDate}
      />
      <CustomInput
        label="EVRAK NO"
        value={voucherNo}
        onChangeText={setVoucherNo}
      />
      <CustomInput
        label="ÖZEL KOD 1"
        value={specialCode1}
        onChangeText={setSpecialCode1}
      />
      <CustomInput
        label="AÇIKLAMA"
        value={notes}
        onChangeText={setNotes}
        multiline={true}
        numberOfLines={3}
      />
    </View>
    
    <View style={styles.actionButtons}>
      <CustomButton
        title="İPTAL"
        onPress={() => navigation.goBack()}
        type="danger"
        icon={<Icon name="close" size={20} color="white" />}
        fullWidth={false}
        style={styles.actionButton}
      />
      
      <CustomButton
        title="KAYDET"
        onPress={() => Alert.alert('Başarılı', 'Sayım fişi kaydedildi')}
        type="primary"
        icon={<Icon name="check-circle" size={20} color="white" />}
        fullWidth={false}
        style={styles.actionButton}
      />
      
      <CustomButton
        title="YAZDIR"
        onPress={() => Alert.alert('Bilgi', 'Yazdırma işlemi başlatıldı')}
        type="secondary"
        icon={<Icon name="print" size={20} color="#1a5f9c" />}
        fullWidth={false}
        style={styles.actionButton}
      />
    </View>
  </ScrollView>
); 