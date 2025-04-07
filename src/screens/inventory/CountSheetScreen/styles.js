import { StyleSheet } from 'react-native';
import Theme from '../../../constants/Theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabContent: {
    flex: 1,
    padding: 16,
  },
  formGroup: {
    borderRadius: Theme.borderRadius.xs,
    padding: Theme.spacing.sm,
    ...Theme.shadows.small,
  },
  actionButtons: {
    marginTop: 16,
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  actionButton: {
    flex: 1,
    marginHorizontal: 4,
  },
});

export default styles; 