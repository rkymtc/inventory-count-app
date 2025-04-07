import { StyleSheet } from 'react-native';
import Theme from '../../../constants/Theme';

export default StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    borderTopLeftRadius: Theme.borderRadius.xl,
    borderTopRightRadius: Theme.borderRadius.xl,
    padding: Theme.spacing.xl,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: Theme.spacing.md + 3,
  },
  doneButton: {
    alignSelf: 'center',
    marginTop: Theme.spacing.md + 3,
    backgroundColor: '#1a5f9c',
    width: 60,
    height: 60,
    borderRadius: Theme.borderRadius.round,
    justifyContent: 'center',
    alignItems: 'center',
  }
}); 