import React from 'react';
import { View, Text } from 'react-native';
import { Input, Button } from '../../../components/ui';
import styles from './styles';

export const LoginForm = ({
  company,
  setCompany,
  factory,
  setFactory,
  warehouse,
  setWarehouse,
  handleLogin,
  colors,
  isDarkMode
}) => (
  <View style={[
    styles.formContainer, 
    { 
      backgroundColor: colors.formBackground,
      shadowColor: colors.shadow,
      borderColor: colors.cardBorder,
      borderWidth: isDarkMode ? 1 : 0
    }
  ]}>
    <Text style={[styles.formTitle, { color: colors.headerBackground }]}>İşyeri ve Ambar Bilgileri</Text>
    
    <View style={styles.inputsContainer}>
      <Input 
        label="İŞYERİ"
        value={company}
        onChangeText={setCompany}
      />
      
      <Input 
        label="FABRİKA"
        value={factory}
        onChangeText={setFactory}
      />
      
      <Input 
        label="AMBAR"
        value={warehouse}
        onChangeText={setWarehouse}
      />
    </View>
    
    <View style={styles.buttonsContainer}>
      <Button 
        title="SEÇ"
        onPress={handleLogin}
        type="primary"
      />
      
      <Button 
        title="KAPAT"
        onPress={() => {}}
        type="danger"
      />
    </View>
  </View>
); 