import React from 'react';
import { SafeAreaView, FlatList, StatusBar, Platform } from 'react-native';
import { Header } from '../../../components';
import { useProductSearch } from '../../../hooks/useProductSearch';
import { useTheme } from '../../../context/ThemeContext';
import { ROUTES } from '../../../navigation/routes';
import { SearchBar, ProductItem, EmptyResults } from './components';
import styles from './styles';


const ProductListScreen = ({ navigation }) => {
  const { colors, isDarkMode } = useTheme();
  const { 
    searchText, 
    setSearchText, 
    products, 
    isLoading, 
    handleSearch, 
    clearSearch 
  } = useProductSearch();

  const handleProductSelect = (product) => {
    navigation.navigate(ROUTES.PRODUCT_ADD, { product });
  };

  const handleBackPress = () => {
    navigation.goBack();
  };

  const navigateToLogin = () => {
    navigation.navigate(ROUTES.LOGIN);
  };

  const renderItem = ({ item }) => (
    <ProductItem 
      item={item}
      onProductSelect={handleProductSelect}
    />
  );

  const renderEmptyList = () => (
    <EmptyResults colors={colors} />
  );

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.screenBackground }]}> 
      <StatusBar 
        backgroundColor={colors.statusBarBackground}
        barStyle={colors.statusBarStyle}
        translucent={Platform.OS === 'ios'}
      />
      
      <Header 
        title="Ürün Listesi"
        showBackButton={true}
        onBackPress={handleBackPress}
        rightIcons={[
          { name: 'calculate', onPress: () => {} },
          { name: 'menu', onPress: () => {} },
          { name: 'home', onPress: navigateToLogin }
        ]}
      />
      
      <SearchBar 
        searchText={searchText}
        setSearchText={setSearchText}
        handleSearch={handleSearch}
        clearSearch={clearSearch}
        isLoading={isLoading}
        colors={colors}
        isDarkMode={isDarkMode}
      />
      
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={item => item.kod}
        contentContainerStyle={styles.productList}
        ListEmptyComponent={renderEmptyList}
      />
    </SafeAreaView>
  );
};

export { ProductListScreen }; 