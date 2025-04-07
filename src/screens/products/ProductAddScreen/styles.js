import { StyleSheet } from 'react-native';
import Theme from '../../../constants/Theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    padding: 16,
  },
  actionButtonsContainer: {
    marginTop: Theme.spacing.lg,
    marginBottom: Theme.spacing.xl,
  }
});

export default styles; 