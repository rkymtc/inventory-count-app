import React from 'react';
import { View, Text, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
import { ProductCard } from '../../../components';
import { Button } from '../../../components/ui';
import styles from './styles';


export const SearchBar = ({ 
  searchText, 
  setSearchText, 
  handleSearch, 
  clearSearch, 
  isLoading,
  colors,
  isDarkMode
}) => (
  <View style={styles.searchSection}>
    <View style={[
      styles.searchContainer, 
      { 
        backgroundColor: colors.inputBackground,
        borderColor: isDarkMode ? colors.cardBorder : colors.inputBorder 
      }
    ]}> 
      <Text style={[styles.searchIcon, { color: colors.placeholder }]}>🔍</Text>
      <TextInput
        style={[styles.searchInput, { color: colors.text }]}
        placeholder="Kod/Ad"
        placeholderTextColor={colors.placeholder}
        value={searchText}
        onChangeText={setSearchText}
        onSubmitEditing={handleSearch}
      />
      {searchText.length > 0 && (
        <TouchableOpacity 
          style={styles.clearButton}
          onPress={clearSearch}
        >
          <Text style={[styles.clearIcon, { color: colors.icon }]}>✕</Text>
        </TouchableOpacity>
      )}
    </View>
    <Button 
      title={isLoading ? "Aranıyor..." : "ARA"}
      onPress={handleSearch}
      type="primary"
      disabled={isLoading}
      icon={isLoading ? <ActivityIndicator size="small" color={isDarkMode ? "#222" : "#fff"} /> : null}
    />
  </View>
);


export const ProductItem = ({ item, onProductSelect }) => (
  <ProductCard 
    product={item}
    onPress={() => onProductSelect(item)}
  />
);


export const EmptyResults = ({ colors }) => (
  <View style={styles.emptyContainer}>
    <Text style={[styles.emptyIcon, { color: colors.border }]}>🔍</Text>
    <Text style={[styles.emptyText, { color: colors.text }]}>Ürün bulunamadı</Text>
    <Text style={[styles.emptySubText, { color: colors.placeholder }]}>Lütfen farklı arama kriterlerini deneyin</Text>
  </View>
); 