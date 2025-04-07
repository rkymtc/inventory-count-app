import React, { useState } from 'react';
import { 
  SafeAreaView,
  StatusBar,
  Platform,
  Alert
} from 'react-native';
import { Header, TabBar } from '../../../components';
import { useTheme } from '../../../context/ThemeContext';
import { countProducts } from '../../../utils/mockData';
import { ROUTES } from '../../../navigation/routes';
import { SearchTab, ListTab, TotalTab } from './components';
import styles from './styles';

const CountSheetScreen = ({ navigation }) => {
  const { colors } = useTheme();
  const [activeTab, setActiveTab] = useState('total');
  const [products, setProducts] = useState(countProducts);
  const [sourceCompany, setSourceCompany] = useState('Merkez');
  const [factory, setFactory] = useState('Merkez');
  const [sourceWarehouse, setSourceWarehouse] = useState('Merkez');
  const [date, setDate] = useState('21-08-2022');
  const [voucherNo, setVoucherNo] = useState('');
  const [specialCode1, setSpecialCode1] = useState('');
  const [notes, setNotes] = useState('');

  const handleAddProduct = (product) => {
    const existingProductIndex = products.findIndex(p => p.kod === product.kod);
    
    if (existingProductIndex >= 0) {
      const updatedProducts = [...products];
      updatedProducts[existingProductIndex].miktar += product.miktar;
      setProducts(updatedProducts);
    } else {
      setProducts([product, ...products]);
    }
    
    setActiveTab('list');
    
    Alert.alert('Başarılı', 'Ürün listeye eklendi');
  };
  
  const handleDeleteProduct = (product) => {
    setProducts(products.filter(p => p.kod !== product.kod));
  };
  
  const handleAcceptProduct = (product) => {
    Alert.alert('Onayla', `${product.ad} ürünü onaylandı`);
  };

  const renderActiveTab = () => {
    switch (activeTab) {
      case 'search':
        return <SearchTab onAddProduct={handleAddProduct} />;
      case 'list':
        return (
          <ListTab 
            products={products} 
            onDeleteProduct={handleDeleteProduct}
            onAcceptProduct={handleAcceptProduct}
          />
        );
      case 'total':
        return (
          <TotalTab 
            navigation={navigation}
            sourceCompany={sourceCompany}
            setSourceCompany={setSourceCompany}
            factory={factory}
            setFactory={setFactory}
            sourceWarehouse={sourceWarehouse}
            setSourceWarehouse={setSourceWarehouse}
            date={date}
            setDate={setDate}
            voucherNo={voucherNo}
            setVoucherNo={setVoucherNo}
            specialCode1={specialCode1}
            setSpecialCode1={setSpecialCode1}
            notes={notes}
            setNotes={setNotes}
            colors={colors}
          />
        );
      default:
        return null;
    }
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.screenBackground }]}>
      <StatusBar 
         backgroundColor={colors.statusBarBackground}
         barStyle={colors.statusBarStyle}
         translucent={Platform.OS === 'ios'}
      />
      <Header 
        title="Sayım Fişi"
        showBackButton={true}
        onBackPress={() => navigation.goBack()}
        rightIcons={[
          { name: 'calculate', onPress: () => {} },
          { name: 'home', onPress: () => navigation.navigate(ROUTES.LOGIN) }
        ]}
      />
      
      <TabBar
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />
      
      {renderActiveTab()}
    </SafeAreaView>
  );
};

export { CountSheetScreen }; 