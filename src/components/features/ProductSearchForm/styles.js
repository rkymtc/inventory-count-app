import { StyleSheet } from 'react-native';
import Theme from '../../../constants/Theme';

export default StyleSheet.create({
  container: {
    borderRadius: Theme.borderRadius.xs,
    padding: Theme.spacing.lg,
    ...Theme.shadows.medium,
  },
  buttonContainer: {
    marginTop: Theme.spacing.sm,
  }
}); 