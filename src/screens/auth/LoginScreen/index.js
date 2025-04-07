import React, { useState } from 'react';
import { 
  SafeAreaView, 
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StatusBar
} from 'react-native';
import { Header } from '../../../components';
import { useTheme } from '../../../context/ThemeContext';
import { ROUTES } from '../../../navigation/routes';
import { LoginForm } from './components';
import styles from './styles';

const LoginScreen = ({ navigation }) => {
  const { colors, isDarkMode } = useTheme();
  const [company, setCompany] = useState('Merkez');
  const [factory, setFactory] = useState('Merkez');
  const [warehouse, setWarehouse] = useState('Merkez');

  const handleLogin = () => {
    navigation.navigate(ROUTES.PRODUCT_LIST);
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.screenBackground }]}>
      <StatusBar 
        backgroundColor={colors.statusBarBackground}
        barStyle={colors.statusBarStyle}
        translucent={Platform.OS === 'ios'}
      />
      <Header title="Giriş" />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardAvoidView}
      >
        <ScrollView contentContainerStyle={styles.scrollView}>          
          <LoginForm 
            company={company}
            setCompany={setCompany}
            factory={factory}
            setFactory={setFactory}
            warehouse={warehouse}
            setWarehouse={setWarehouse}
            handleLogin={handleLogin}
            colors={colors}
            isDarkMode={isDarkMode}
          />
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export { LoginScreen }; 