import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { 
  SafeAreaView,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  StatusBar
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Header } from '../../../components';
import { useTheme } from '../../../context/ThemeContext';
import { ROUTES } from '../../../navigation/routes';

import {
  ProductInfoCard,
  ExpandableCard,
  BasicInfoSection,
  DetailInfoSection,
  SpecialInfoSection,
  ActionButtons
} from '../../../components/product';

import styles from './styles';


const ProductAddScreen = ({ route, navigation }) => {
  const { colors, isDarkMode } = useTheme();
  const { product } = route.params || {};
  
  const [kod, setKod] = useState('');
  const [ad, setAd] = useState('');
  const [genelBakiye, setGenelBakiye] = useState('');
  const [ambarBakiye, setAmbarBakiye] = useState('');
  
  const [miktar, setMiktar] = useState('1');
  const [birim, setBirim] = useState('');
  const [fiyat, setFiyat] = useState('');
  const [kdv, setKdv] = useState('');
  const [dahil, setDahil] = useState(false);
  const [ambar, setAmbar] = useState('Merkez');
  const [teslimTarihi, setTeslimTarihi] = useState('21-08-2024');
  
  const [net, setNet] = useState('');
  const [isk1, setIsk1] = useState('0');
  const [isk2, setIsk2] = useState('0');
  const [isk3, setIsk3] = useState('0');
  const [aciklama, setAciklama] = useState('');
  
  const [miktar2, setMiktar2] = useState('');
  const [ozelKod1, setOzelKod1] = useState('');
  const [ozelKod2, setOzelKod2] = useState('');
  
 
  const [expandedSection, setExpandedSection] = useState('temel');

  useEffect(() => {
    if (product) {
      setKod(product.kod);
      setAd(product.ad);
      setBirim(product.birim);
      setMiktar(product.miktar ? product.miktar.toString() : '1');
      
      if (product.fili !== undefined) {
        setGenelBakiye(`Fiili: ${product.fili} - Sipariş: ${product.siparis} - Sevk: ${product.stok}`);
        setAmbarBakiye(`Fiili: ${product.fili} - Sipariş: ${product.siparis} - Sevk: ${product.stok}`);
      }
      
      if (product.satisF) {
        setFiyat(product.satisF);
        setNet(product.satisF);
      }
    }
  }, [product]);

  const handleDetay = useCallback(() => {
    setExpandedSection(prev => prev === 'detay' ? null : 'detay');
  }, []);

  const handleAmbar = useCallback(() => {
    navigation.navigate(ROUTES.COUNT_SHEET);
  }, [navigation]);
  
  const handleEkle = useCallback(() => {
    navigation.navigate(ROUTES.COUNT_SHEET);
  }, [navigation]);
  
  const handleToggleDahil = useCallback(() => {
    setDahil(prevDahil => !prevDahil);
  }, []);
  
  const handleBackPress = useCallback(() => {
    navigation.goBack();
  }, [navigation]);
  
  const toggleSection = useCallback((section) => {
    setExpandedSection(prev => prev === section ? null : section);
  }, []);
  
  const handleDateChange = useCallback((newDate) => {
    console.log('Date changed:', newDate);
    setTeslimTarihi(newDate);
  }, []);

  const handleArttir = useCallback(() => {
    setMiktar((prevMiktar) => {
      const newValue = (parseInt(prevMiktar) + 1).toString();
      return newValue;
    });
  }, []);

  const rightIcons = useMemo(() => [
    { name: 'calculate', onPress: () => {} },
    { name: 'home', onPress: () => navigation.navigate(ROUTES.LOGIN) }
  ], [navigation]);
  
  const refreshIcon = useMemo(() => (
    <Icon name="refresh" size={20} color={colors.icon} />
  ), [colors.icon]);

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.screenBackground }]}>
      <StatusBar 
        backgroundColor={colors.statusBarBackground}
        barStyle={colors.statusBarStyle}
        translucent={Platform.OS === 'ios'}
      />
      <Header 
        title="Ürün Ekle"
        showBackButton={true}
        onBackPress={handleBackPress}
        rightIcons={rightIcons}
      />
      
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{flex: 1}}
      >
        <ScrollView 
          style={styles.content} 
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          <ProductInfoCard 
            kod={kod} 
            ad={ad} 
            genelBakiye={genelBakiye} 
            ambarBakiye={ambarBakiye} 
            colors={colors} 
            isDarkMode={isDarkMode} 
          />
          
          <ExpandableCard 
            title="Temel Bilgiler" 
            expanded={expandedSection === 'temel'} 
            onToggle={() => toggleSection('temel')} 
            colors={colors} 
            isDarkMode={isDarkMode}
          >
            <BasicInfoSection 
              miktar={miktar}
              setMiktar={setMiktar}
              birim={birim}
              fiyat={fiyat}
              setFiyat={setFiyat}
              kdv={kdv}
              setKdv={setKdv}
              dahil={dahil}
              handleToggleDahil={handleToggleDahil}
              ambar={ambar}
              setAmbar={setAmbar}
              teslimTarihi={teslimTarihi}
              handleDateChange={handleDateChange}
              handleArttir={handleArttir}
              refreshIcon={refreshIcon}
              colors={colors}
              isDarkMode={isDarkMode}
            />
          </ExpandableCard>
          
          <ExpandableCard 
            title="Detay Bilgileri" 
            expanded={expandedSection === 'detay'} 
            onToggle={() => toggleSection('detay')} 
            colors={colors} 
            isDarkMode={isDarkMode}
          >
            <DetailInfoSection 
              net={net}
              fiyat={fiyat}
              isk1={isk1}
              setIsk1={setIsk1}
              isk2={isk2}
              setIsk2={setIsk2}
              isk3={isk3}
              setIsk3={setIsk3}
              aciklama={aciklama}
              setAciklama={setAciklama}
              colors={colors}
            />
          </ExpandableCard>
          
          <ExpandableCard 
            title="Özel Bilgiler" 
            expanded={expandedSection === 'ozel'} 
            onToggle={() => toggleSection('ozel')} 
            colors={colors} 
            isDarkMode={isDarkMode}
          >
            <SpecialInfoSection 
              ozelKod1={ozelKod1}
              setOzelKod1={setOzelKod1}
              ozelKod2={ozelKod2}
              setOzelKod2={setOzelKod2}
            />
          </ExpandableCard>
          
       
          <ActionButtons 
            onDetay={handleDetay}
            onAmbar={handleAmbar}
            onEkle={handleEkle}
            colors={colors}
          />
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export { ProductAddScreen }; 