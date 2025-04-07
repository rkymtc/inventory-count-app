import { useState } from 'react';
import { mockProducts } from '../utils/mockData';

export const useProductSearch = () => {
  const [searchText, setSearchText] = useState('');
  const [products, setProducts] = useState(mockProducts);
  const [isLoading, setIsLoading] = useState(false);


  const handleSearch = () => {
    setIsLoading(true);
    
    setTimeout(() => {
      if (!searchText.trim()) {
        setProducts(mockProducts);
        setIsLoading(false);
        return;
      }
      
      const filteredProducts = mockProducts.filter(
        product => product.kod.toLowerCase().includes(searchText.toLowerCase()) || 
                  product.ad.toLowerCase().includes(searchText.toLowerCase())
      );
      
      setProducts(filteredProducts);
      setIsLoading(false);
    }, 500);
  };

 
  const clearSearch = () => {
    setSearchText('');
    setProducts(mockProducts);
  };

  return {
    searchText,
    setSearchText,
    products,
    isLoading,
    handleSearch,
    clearSearch,
  };
}; 