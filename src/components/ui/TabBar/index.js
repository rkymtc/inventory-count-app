import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

const TabBar = ({ activeTab, onTabChange }) => {
  const tabs = [
    { key: 'search', title: 'Ürün Ara', icon: '🔍' },
    { key: 'list', title: 'Liste', icon: '☰' },
    { key: 'total', title: 'Toplam', icon: '∑' },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.tabContainer}>
        {tabs.map((tab) => (
          <TouchableOpacity
            key={tab.key}
            style={[
              styles.tab,
              activeTab === tab.key && styles.activeTab
            ]}
            onPress={() => onTabChange(tab.key)}
            activeOpacity={0.8}
          >
            <Text style={[
              styles.iconText,
              activeTab === tab.key && styles.activeIconText
            ]}>
              {tab.icon}
            </Text>
            <Text style={[
              styles.tabText,
              activeTab === tab.key && styles.activeTabText
            ]}>
              {tab.title}
            </Text>
            
            {activeTab === tab.key && (
              <View style={styles.activeIndicator} />
            )}
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export { TabBar }; 