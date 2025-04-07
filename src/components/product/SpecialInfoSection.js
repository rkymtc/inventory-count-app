import React from 'react';
import { StyleSheet } from 'react-native';
import { CustomInput } from '..';

const SpecialInfoSection = ({
  ozelKod1,
  setOzelKod1,
  ozelKod2,
  setOzelKod2
}) => (
  <>
    <CustomInput 
      label="ÖZEL KOD 1"
      value={ozelKod1}
      onChangeText={setOzelKod1}
      containerStyle={styles.inputContainer}
    />
    
    <CustomInput 
      label="ÖZEL KOD 2"
      value={ozelKod2}
      onChangeText={setOzelKod2}
      containerStyle={styles.inputContainer}
    />
  </>
);

const styles = StyleSheet.create({
  inputContainer: {
    marginBottom: 12,
  },
});

export { SpecialInfoSection }; 