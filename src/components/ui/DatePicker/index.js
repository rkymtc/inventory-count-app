import React, { useState, useEffect } from 'react';
import { View, Platform, TouchableOpacity, Modal, Text } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Input } from '../Input';
import styles from './styles';

const DatePicker = ({ 
  label, 
  value, 
  onChange,
  placeholder = 'Tarih seçiniz'
}) => {
  const [showPicker, setShowPicker] = useState(false);
  const [date, setDate] = useState(new Date());
  
  useEffect(() => {
    if (value) {
      try {
        const parts = value.split('-');
        if (parts.length === 3) {
          const day = parseInt(parts[0], 10);
          const month = parseInt(parts[1], 10) - 1;
          const year = parseInt(parts[2], 10);
          const newDate = new Date(year, month, day);
          
          if (!isNaN(newDate.getTime())) {
            setDate(newDate);
          }
        }
      } catch (error) {
        console.log('Tarih ayrıştırma hatası:', error);
      }
    }
  }, [value]);

  const formatDate = (date) => {
    if (!date) return '';
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };

  const handleDateChange = (event, selectedDate) => {
    if (Platform.OS === 'android') {
      setShowPicker(false);
    }
    
    if (selectedDate) {
      setDate(selectedDate);
      onChange(formatDate(selectedDate));
    }
  };

  const showDatepicker = () => {
    setShowPicker(true);
  };

  const hideDatePicker = () => {
    setShowPicker(false);
  };

  const displayValue = value || '';

  return (
    <>
      <Input
        label={label}
        value={displayValue}
        editable={false}
        placeholder={placeholder}
        type="date"
        rightContent={<Icon name="calendar-today" size={20} color="#888" />}
        onRightIconPress={showDatepicker}
      />

      {showPicker && (
        Platform.OS === 'ios' ? (
          <Modal
            transparent={true}
            animationType="slide"
            visible={showPicker}
          >
            <View style={styles.modalContainer}>
              <View style={styles.modalContent}>
                <Text style={styles.modalTitle}>Tarih Seçiniz</Text>
                <DateTimePicker
                  testID="dateTimePicker"
                  value={date}
                  mode="date"
                  display="spinner"
                  onChange={handleDateChange}
                />
                <TouchableOpacity 
                  style={styles.doneButton}
                  onPress={hideDatePicker}
                >
                  <Icon name="check" size={24} color="#fff" />
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        ) : (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode="date"
            display="default"
            onChange={handleDateChange}
          />
        )
      )}
    </>
  );
};

export { DatePicker }; 