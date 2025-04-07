import { StyleSheet } from 'react-native';
import Theme from '../../../constants/Theme';

export default StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: Theme.borderRadius.md,
    overflow: 'hidden',
    marginBottom: Theme.spacing.lg,
  
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: Theme.spacing.lg,
    borderBottomWidth: Theme.borderWidth.regular,
    borderBottomColor: '#f0f0f0',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  formSection: {
    padding: Theme.spacing.lg,
  },
}); 